import {
  Controller,
  Post,
  Body,
  Res,
  HttpCode,
  HttpStatus,
  Req,
} from "@nestjs/common";
import { Response, Request } from "express";
import { AuthService } from "./auth.service";
import { LoginDto } from "./dto/login.dto";
import { UserDto } from "../user/dto/user.dto";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}
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
      domain: process.env.COOKIE_DOMAIN,
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
      domain: process.env.COOKIE_DOMAIN,
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
      domain: process.env.COOKIE_DOMAIN,
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
}
