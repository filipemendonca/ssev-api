import { Injectable } from "@nestjs/common";
import { Prisma, Solicitation } from "@prisma/client";
import { BaseRepository } from "../../common/base.repository";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class SolicitationRepository extends BaseRepository<
  Prisma.SolicitationDelegate,
  Solicitation
> {
  protected readonly model: Prisma.SolicitationDelegate;

  constructor(prisma: PrismaService) {
    super(prisma, (p) => p.solicitation);
  }
}
