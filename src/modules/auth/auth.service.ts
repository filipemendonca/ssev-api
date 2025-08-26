import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compare, hash } from "bcrypt";
import { UserService } from "../user/user.service";
import { UserDto } from "../user/dto/user.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findBy(email);
    if (user && (await compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException("Credenciais inválidas.");
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email };

    const accessToken = this.jwtService.sign(payload, { expiresIn: "15m" });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: "7d" });

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  async register(data: UserDto) {
    const hashedPassword = await hash(data.password, 10);
    const user = await this.usersService.create({
      ...data,
      password: hashedPassword,
    });
    return this.login(user);
  }

  async refreshTokens(refreshToken: string) {
    try {
      // Valida refresh token
      const payload = await this.jwtService.verifyAsync(refreshToken, {
        secret: process.env.JWT_REFRESH_SECRET,
      });

      const user = await this.usersService.findOne(payload.sub);
      if (!user) {
        throw new UnauthorizedException("User not found");
      }

      // Opcional: checar se refreshToken ainda é válido no banco
      // (ex: se o usuário fez logout, invalida o token)

      const accessToken = await this.jwtService.signAsync(
        { sub: user.id, email: user.email },
        { secret: process.env.JWT_SECRET, expiresIn: "15m" }
      );

      const newRefreshToken = await this.jwtService.signAsync(
        { sub: user.id },
        { secret: process.env.JWT_REFRESH_SECRET, expiresIn: "7d" }
      );

      return { accessToken, refreshToken: newRefreshToken, user };
    } catch (e) {
      console.error("Error refreshing tokens:", e);
      throw new UnauthorizedException("Invalid refresh token");
    }
  }
}
