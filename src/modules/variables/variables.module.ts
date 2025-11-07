import { Module } from "@nestjs/common";
import { PrismaService } from "prisma/prisma.service";
import { VariablesController } from "./variables.controller";
import { VariablesRepository } from "./variables.repository";
import { VariablesService } from "./variables.service";

@Module({
  providers: [VariablesService, VariablesRepository, PrismaService],
  controllers: [VariablesController],
})
export class VariablesModule {}
