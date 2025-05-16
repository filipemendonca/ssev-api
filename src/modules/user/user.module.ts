import { Module } from "@nestjs/common";
import { UserRepository } from "./user.repository";
import { PrismaService } from "prisma/prisma.service";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

@Module({
  providers: [UserService, UserRepository, PrismaService],
  controllers: [UserController],
})
export class UserModule {}
