import { Module } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { ExamsResultTemplateController } from "./exams.result.template.controller";
import { ExamsResultTemplateRepository } from "./exams.result.template.repository";
import { ExamsResultTemplateService } from "./exams.result.template.service";

@Module({
  providers: [
    ExamsResultTemplateService,
    ExamsResultTemplateRepository,
    PrismaService,
  ],
  controllers: [ExamsResultTemplateController],
})
export class ExamsResultTemplateModule {}
