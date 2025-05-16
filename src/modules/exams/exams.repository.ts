import { Injectable } from "@nestjs/common";
import { Exams } from "@prisma/client";
import { BaseRepository } from "../../common/base.repository";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class ExamsRepository extends BaseRepository<Exams> {
  constructor(prisma: PrismaService) {
    super(prisma, (p) => p.exams);
  }
}
