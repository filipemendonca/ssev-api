import { Module } from "@nestjs/common";
import { SolicitationHistoryRepository } from "./solicitation.history.repository";
import { PrismaService } from "prisma/prisma.service";
import { SolicitationHistoryService } from "./solicitation.history.service";
import { SolicitationHistoryController } from "./solicitation.history.controller";

@Module({
  providers: [
    SolicitationHistoryService,
    SolicitationHistoryRepository,
    PrismaService,
  ],
  controllers: [SolicitationHistoryController],
})
export class SolicitationHistoryModule {}
