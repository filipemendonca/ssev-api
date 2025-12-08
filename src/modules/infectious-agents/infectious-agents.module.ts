import { Module } from "@nestjs/common";
import { InfectiousAgentsService } from "./infectious-agents.service";
import { InfectiousAgentsRepository } from "./infectious-agents.repository";
import { InfectiousAgentsController } from "./infectious-agents.controller";
import { PrismaService } from "../../../prisma/prisma.service";

@Module({
  providers: [
    InfectiousAgentsService,
    InfectiousAgentsRepository,
    PrismaService,
  ],
  controllers: [InfectiousAgentsController],
})
export class InfectiousAgentsModule {}
