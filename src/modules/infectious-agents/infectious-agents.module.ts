import { Module } from "@nestjs/common";
import { InfectiousAgentsService } from "./infectious-agents.service";
import { InfectiousAgentsRepository } from "./infectious-agents.repository";
import { PrismaService } from "prisma/prisma.service";

@Module({
  providers: [
    InfectiousAgentsService,
    InfectiousAgentsRepository,
    PrismaService,
  ],
})
export class InfectiousAgentsModule {}
