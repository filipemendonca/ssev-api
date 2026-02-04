import {
  Controller,
  Post,
  Body,
  Res,
  HttpCode,
  HttpStatus,
  Req,
  BadRequestException,
} from "@nestjs/common";
import { Response, Request } from "express";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { UserDto } from "../user/dto/user.dto";
import {
  generateResetToken,
  resetPasswordEmailTemplate,
  sha256,
} from "../../common/utils/password-reset.util";
import { addMinutes } from "date-fns";
import { PrismaService } from "../../../prisma/prisma.service";
import { MailService } from "../../common/services/mail.service";
import { hash } from "bcryptjs";
import { SuccessResponse } from "../../common/dto/response.dto";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly prismaService: PrismaService,
    private readonly mailService: MailService
  ) {}

  @Post("login")
  async login(
    @Body() dto: LoginDto,
    @Res({ passthrough: true }) res: Response
  ) {
    const user = await this.authService.validateUser(dto.email, dto.password);
    const { access_token, refresh_token } = await this.authService.login(
      user as UserDto
    );

    const userRefined = {
      id: user.id,
      email: user.email,
      name: user.name,
      isActive: user.isActive,
      role: user.role,
    };

    res.cookie("refresh_token", refresh_token, {
      httpOnly: true,
      secure: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      path: "/",
      maxAge: 1000 * 60 * 60 * 24 * 7, // 7 dias
    });

    return { access_token, user: userRefined };
  }

  @Post("refresh")
  @HttpCode(HttpStatus.OK)
  async refresh(@Req() req: Request, @Res() res: Response) {
    const refreshToken = req.cookies["refresh_token"];
    if (!refreshToken) {
      return res
        .status(HttpStatus.UNAUTHORIZED)
        .json({ error: "No refresh token" });
    }

    const {
      accessToken,
      refreshToken: newRefreshToken,
      user,
    } = await this.authService.refreshTokens(refreshToken);

    // Atualiza cookie do refresh token
    res.cookie("refresh_token", newRefreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      path: "/",
    });

    return res.json({ access_token: accessToken, user });
  }

  @Post("logout")
  async logout(@Res({ passthrough: true }) res: Response) {
    // Remove o cookie refresh_token
    res.clearCookie("refresh_token", {
      httpOnly: true,
      secure: true,
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      path: "/",
    });

    return { message: "Logout efetuado com sucesso" };
  }

  @Post("validate-refresh")
  async validateRefresh(@Body("refresh_token") token: string) {
    try {
      const payload = await this.authService["jwtService"].verifyAsync(token, {
        secret: process.env.JWT_REFRESH_SECRET,
      });
      return { valid: true, userId: payload.sub };
    } catch (ex) {
      console.error(ex);
      return { valid: false };
    }
  }

  @Post("validate-reset-token")
  async validate(@Body("token") token: string) {
    const tokenHash = sha256(token);

    const record = await this.prismaService.passwordResetToken.findFirst({
      where: {
        tokenHash,
        usedAt: null,
        expiresAt: { gt: new Date() },
      },
    });

    if (!record) throw new BadRequestException("Token inválido");

    return new SuccessResponse<{ valid: boolean }>({ valid: true }, "");
  }

  @Post("forgot-password")
  async forgotPassword(@Body("email") email: string) {
    const user = await this.prismaService.user.findUnique({ where: { email } });

    // Sempre retorna ok (anti enumeração de email)``
    if (!user)
      return {
        message:
          "Se existir, enviaremos as informações de recuperação de senha para o e-mail cadastrado.",
      };

    const { token, tokenHash } = generateResetToken();

    const link = `${process.env.FRONTEND_URL}/reset-password?token=${token}`;

    const html = resetPasswordEmailTemplate({
      name: user.name,
      resetLink: link,
    });

    await this.prismaService.passwordResetToken.create({
      data: {
        userId: user.id,
        tokenHash,
        expiresAt: addMinutes(new Date(), 30),
      },
    });

    await this.mailService.sendMail({
      to: user.email,
      subject: "Redefinição de senha",
      html,
    });

    return {
      message:
        "Se existir, enviaremos as informações de recuperação de senha para o e-mail cadastrado.",
    };
  }

  @Post("reset-password")
  async reset(@Body() body: { token: string; password: string }) {
    const tokenHash = sha256(body.token);

    const record = await this.prismaService.passwordResetToken.findFirst({
      where: {
        tokenHash,
        usedAt: null,
        expiresAt: { gt: new Date() },
      },
    });

    if (!record) throw new BadRequestException("Token inválido");

    const passwordHash = await hash(body.password, 10);

    await this.prismaService.$transaction([
      this.prismaService.user.update({
        where: { id: record.userId },
        data: { password: passwordHash },
      }),
      this.prismaService.passwordResetToken.update({
        where: { id: record.id },
        data: { usedAt: new Date() },
      }),
    ]);

    return { message: "Senha redefinida com sucesso" };
  }
}
