import { Module } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";
import { DocxService } from "../docx/docx-service";
import { SolicitationHistoryRepository } from "../solicitationHistory/solicitation.history.repository";
import { SolicitationHistoryService } from "../solicitationHistory/solicitation.history.service";
import { VariablesRepository } from "../variables/variables.repository";
import { VariablesService } from "../variables/variables.service";
import { SolicitationController } from "./solicitation.controller";
import { SolicitationRepository } from "./solicitation.repository";
import { SolicitationService } from "./solicitation.service";
import { ExamsResultTemplateRepository } from "../examsResultTemplate/exams.result.template.repository";
import { ExamsResultTemplateService } from "../examsResultTemplate/exams.result.template.service";

@Module({
  providers: [
    SolicitationService,
    SolicitationRepository,
    SolicitationHistoryService,
    SolicitationHistoryRepository,
    VariablesService,
    VariablesRepository,
    ExamsResultTemplateService,
    ExamsResultTemplateRepository,
    DocxService,
    PrismaService,
  ],
  controllers: [SolicitationController],
})
export class SolicitationModule {}
