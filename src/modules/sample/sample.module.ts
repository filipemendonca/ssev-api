import { Module } from "@nestjs/common";
import { SampleService } from "./sample.service";
import { SampleController } from "./sample.controller";
import { SampleRepository } from "./sample.repository";
import { PrismaService } from "prisma/prisma.service";

@Module({
  providers: [SampleService, SampleRepository, PrismaService],
  controllers: [SampleController],
})
export class SampleModule {}
