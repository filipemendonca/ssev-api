import { Module } from "@nestjs/common";
import { VariablesController } from "./variables.controller";
import { VariablesRepository } from "./variables.repository";
import { VariablesService } from "./variables.service";
import { PrismaService } from "../../../prisma/prisma.service";

@Module({
  providers: [VariablesService, VariablesRepository, PrismaService],
  controllers: [VariablesController],
})
export class VariablesModule {}
