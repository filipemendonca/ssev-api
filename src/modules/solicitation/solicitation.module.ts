import { Module } from "@nestjs/common";
import { SolicitationRepository } from "./solicitation.repository";
import { PrismaService } from "prisma/prisma.service";
import { SolicitationService } from "./solicitation.service";
import { SolicitationController } from "./solicitation.controller";

@Module({
  providers: [SolicitationService, SolicitationRepository, PrismaService],
  controllers: [SolicitationController],
})
export class SolicitationModule {}
