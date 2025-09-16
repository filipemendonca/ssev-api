import { Module } from "@nestjs/common";
import { SolicitationRepository } from "./solicitation.repository";
import { PrismaService } from "prisma/prisma.service";
import { SolicitationService } from "./solicitation.service";
import { SolicitationController } from "./solicitation.controller";
import { SolicitationHistoryService } from "../solicitationHistory/solicitation.history.service";
import { SolicitationHistoryRepository } from "../solicitationHistory/solicitation.history.repository";

@Module({
  providers: [
    SolicitationService,
    SolicitationRepository,
    SolicitationHistoryService,
    SolicitationHistoryRepository,
    PrismaService,
  ],
  controllers: [SolicitationController],
})
export class SolicitationModule {}
