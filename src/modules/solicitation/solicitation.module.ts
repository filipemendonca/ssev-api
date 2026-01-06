import { Module } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";
import { DocxService } from "../../common/services/docx-service";
import { SolicitationHistoryRepository } from "../solicitationHistory/solicitation.history.repository";
import { SolicitationHistoryService } from "../solicitationHistory/solicitation.history.service";
import { VariablesRepository } from "../variables/variables.repository";
import { VariablesService } from "../variables/variables.service";
import { SolicitationController } from "./solicitation.controller";
import { SolicitationRepository } from "./solicitation.repository";
import { SolicitationService } from "./solicitation.service";
import { ExamsResultTemplateRepository } from "../examsResultTemplate/exams.result.template.repository";
import { ExamsResultTemplateService } from "../examsResultTemplate/exams.result.template.service";
import { MailService } from "../../common/services/mail.service";
import { UserService } from "../user/user.service";
import { UserRepository } from "../user/user.repository";
import { GoogleDriveService } from "../../common/services/google-drive.service";
import { GoogleOAuthService } from "../../common/services/google-oauth.service";

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
    UserRepository,
    DocxService,
    MailService,
    UserService,
    PrismaService,
    GoogleDriveService,
    GoogleOAuthService,
  ],
  controllers: [SolicitationController],
})
export class SolicitationModule {}
