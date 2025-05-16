import { Module } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { SolicitationModule } from "./modules/solicitation/solicitation.module";
import { InfectiousAgentsModule } from "./modules/infectious-agents/infectious-agents.module";
import { ExamsModule } from "./modules/exams/exams.module";
import { SampleModule } from "./modules/sample/sample.module";
import { UserModule } from "./modules/user/user.module";
import { AuthModule } from "./modules/auth/auth.module";

@Module({
  imports: [
    AuthModule,
    UserModule,
    SampleModule,
    ExamsModule,
    InfectiousAgentsModule,
    SolicitationModule,
  ],
  providers: [PrismaService],
})
export class AppModule {}
