import { Module } from "@nestjs/common";
import { SolicitationHistoryRepository } from "./solicitation.history.repository";
import { SolicitationHistoryService } from "./solicitation.history.service";
import { SolicitationHistoryController } from "./solicitation.history.controller";
import { PrismaService } from "../../../prisma/prisma.service";

@Module({
  providers: [
    SolicitationHistoryService,
    SolicitationHistoryRepository,
    PrismaService,
  ],
  controllers: [SolicitationHistoryController],
})
export class SolicitationHistoryModule {}
