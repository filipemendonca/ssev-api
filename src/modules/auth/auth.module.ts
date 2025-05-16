import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { AuthService } from "./auth.service";
import { AuthStrategy } from "./strategies/auth.strategy";
import { JwtAuthGuard } from "./guards/auth.guard";
import { UserService } from "../user/user.service";
import { UserRepository } from "../user/user.repository";
import { PrismaService } from "prisma/prisma.service";
import { AuthController } from "./auth.controller";

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
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
