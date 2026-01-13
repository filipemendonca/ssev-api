import { Module } from "@nestjs/common";
import { SolicitationModule } from "./modules/solicitation/solicitation.module";
import { InfectiousAgentsModule } from "./modules/infectious-agents/infectious-agents.module";
import { ExamsModule } from "./modules/exams/exams.module";
import { SampleModule } from "./modules/sample/sample.module";
import { UserModule } from "./modules/user/user.module";
import { AuthModule } from "./modules/auth/auth.module";
import { SolicitationHistoryModule } from "./modules/solicitationHistory/solicitation.history.module";
import { ExamsResultTemplateModule } from "./modules/examsResultTemplate/exams.result.template.module";
import { VariablesModule } from "./modules/variables/variables.module";
import { PrismaService } from "../prisma/prisma.service";
import { ProfileModule } from "./modules/profile/profile.module";

@Module({
  imports: [
    AuthModule,
    UserModule,
    ProfileModule,
    SampleModule,
    ExamsModule,
    InfectiousAgentsModule,
    SolicitationModule,
    SolicitationHistoryModule,
    ExamsResultTemplateModule,
    VariablesModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
