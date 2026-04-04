import { Module } from "@nestjs/common";
import { PrismaService } from "../../../prisma/prisma.service";
import { ConfigurationsRepository } from "./configurations.repository";
import { ConfigurationsService } from "./configurations.service";

@Module({
  providers: [ConfigurationsService, ConfigurationsRepository, PrismaService],
  controllers: [],
})
export class ConfigurationsModule {}
