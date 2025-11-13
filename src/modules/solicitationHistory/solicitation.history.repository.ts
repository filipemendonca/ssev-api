import { Injectable } from "@nestjs/common";
import { Prisma, SolicitationHistory } from "@prisma/client";
import { BaseRepository } from "../../common/base.repository";
import { PrismaService } from "../../../prisma/prisma.service";

@Injectable()
export class SolicitationHistoryRepository extends BaseRepository<
  Prisma.SolicitationHistoryDelegate,
  SolicitationHistory
> {
  protected readonly model: Prisma.SolicitationHistoryDelegate;

  constructor(prisma: PrismaService) {
    super(prisma, (p) => p.solicitationHistory);
  }
}
