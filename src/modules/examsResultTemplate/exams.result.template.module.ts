import { Module } from "@nestjs/common";
import { ExamsResultTemplateController } from "./exams.result.template.controller";
import { ExamsResultTemplateRepository } from "./exams.result.template.repository";
import { ExamsResultTemplateService } from "./exams.result.template.service";
import { PrismaService } from "../../../prisma/prisma.service";

@Module({
  providers: [
    ExamsResultTemplateService,
    ExamsResultTemplateRepository,
    PrismaService,
  ],
  controllers: [ExamsResultTemplateController],
})
export class ExamsResultTemplateModule {}
