import { Module } from "@nestjs/common";
import { SolicitationHistoryRepository } from "./solicitation.history.repository";
import { PrismaService } from "prisma/prisma.service";
import { SolicitationHistoryService } from "./solicitation.history.service";

@Module({
  providers: [
    SolicitationHistoryService,
    SolicitationHistoryRepository,
    PrismaService,
  ],
  controllers: [],
})
export class SolicitationHistoryModule {}
