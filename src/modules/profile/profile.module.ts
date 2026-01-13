import { Module } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";
import { ProfileController } from "./profile.controller";
import { UserService } from "../user/user.service";
import { UserRepository } from "../user/user.repository";

@Module({
  providers: [UserService, UserRepository, PrismaService],
  controllers: [ProfileController],
})
export class ProfileModule {}
