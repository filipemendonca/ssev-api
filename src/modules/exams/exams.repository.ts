import { Injectable } from "@nestjs/common";
import { Exams, Prisma } from "@prisma/client";
import { BaseRepository } from "../../common/base.repository";
import { PrismaService } from "../../../prisma/prisma.service";

@Injectable()
export class ExamsRepository extends BaseRepository<
  Prisma.ExamsDelegate,
  Exams
> {
  constructor(prisma: PrismaService) {
    super(prisma, (p) => p.exams);
  }

  public async validateIfHasName(name: string): Promise<number> {
    return await this.prisma.exams.count({ where: { name } });
  }
}
