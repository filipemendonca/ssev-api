import { Injectable } from "@nestjs/common";
import { ExamResultTemplate, Prisma } from "@prisma/client";
import { BaseRepository } from "../../common/base.repository";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class ExamsResultTemplateRepository extends BaseRepository<
  Prisma.ExamResultTemplateDelegate,
  ExamResultTemplate
> {
  constructor(prisma: PrismaService) {
    super(prisma, (p) => p.examResultTemplate);
  }

  public async validateIfHasName(name: string): Promise<number> {
    return await this.prisma.exams.count({ where: { name } });
  }
}
