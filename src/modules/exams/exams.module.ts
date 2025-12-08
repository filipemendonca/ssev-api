import { Module } from "@nestjs/common";
import { ExamsService } from "./exams.service";
import { ExamsController } from "./exams.controller";
import { ExamsRepository } from "./exams.repository";
import { PrismaService } from "../../../prisma/prisma.service";

@Module({
  providers: [ExamsService, ExamsRepository, PrismaService],
  controllers: [ExamsController],
})
export class ExamsModule {}
