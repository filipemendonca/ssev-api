import { Injectable } from "@nestjs/common";
import { Sample } from "@prisma/client";
import { BaseRepository } from "../../common/base.repository";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class SampleRepository extends BaseRepository<Sample> {
  constructor(prisma: PrismaService) {
    super(prisma, (p) => p.sample);
  }
}
