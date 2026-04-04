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
import { ExamsRepository } from "../exams/exams.repository";
import { ExamsService } from "../exams/exams.service";
import { InfectiousAgentsRepository } from "../infectious-agents/infectious-agents.repository";
import { InfectiousAgentsService } from "../infectious-agents/infectious-agents.service";
import { SampleRepository } from "../sample/sample.repository";
import { SampleService } from "../sample/sample.service";
import { DropboxOAuthService } from "../../common/services/dropbox-oauth.service";

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
    ExamsRepository,
    ExamsService,
    InfectiousAgentsRepository,
    InfectiousAgentsService,
    SampleRepository,
    SampleService,
    DocxService,
    MailService,
    UserService,
    PrismaService,
    GoogleDriveService,
    GoogleOAuthService,
    DropboxOAuthService,
  ],
  controllers: [SolicitationController],
})
export class SolicitationModule {}
