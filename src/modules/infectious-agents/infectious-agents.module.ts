import { Module } from "@nestjs/common";
import { InfectiousAgentsService } from "./infectious-agents.service";
import { InfectiousAgentsRepository } from "./infectious-agents.repository";
import { PrismaService } from "prisma/prisma.service";
import { InfectiousAgentsController } from "./infectious-agents.controller";

@Module({
  providers: [
    InfectiousAgentsService,
    InfectiousAgentsRepository,
    PrismaService,
  ],
  controllers: [InfectiousAgentsController],
})
export class InfectiousAgentsModule {}
