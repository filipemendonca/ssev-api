import { Injectable } from "@nestjs/common";
import { Solicitation } from "@prisma/client";
import { BaseRepository } from "../../common/base.repository";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class SolicitationRepository extends BaseRepository<Solicitation> {
  constructor(prisma: PrismaService) {
    super(prisma, (p) => p.solicitation);
  }
}
