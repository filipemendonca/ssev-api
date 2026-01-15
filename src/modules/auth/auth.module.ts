import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { AuthStrategy } from "./strategies/auth.strategy";
import { JwtAuthGuard } from "./guards/auth.guard";
import { UserService } from "../user/user.service";
import { UserRepository } from "../user/user.repository";
import { AuthController } from "./auth.controller";
import { PrismaService } from "../../../prisma/prisma.service";
import { GoogleAuthController } from "../googleOAuth/google.auth.controller";
import { GoogleOAuthService } from "../../common/services/google-oauth.service";
import { MailService } from "../../common/services/mail.service";

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET || "jwt_secret_key",
      signOptions: { expiresIn: "1d" },
    }),
  ],
  providers: [
    AuthService,
    AuthStrategy,
    JwtAuthGuard,
    UserService,
    UserRepository,
    PrismaService,
    MailService,
    GoogleOAuthService,
  ],
  controllers: [AuthController, GoogleAuthController],
  exports: [AuthService],
})
export class AuthModule {}
