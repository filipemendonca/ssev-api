import { Injectable } from "@nestjs/common";
import { InfectiousAgents, Prisma } from "../../../generated/prisma";
import { BaseRepository } from "../../common/base.repository";
import { PrismaService } from "../../../prisma/prisma.service";

@Injectable()
export class InfectiousAgentsRepository extends BaseRepository<
  Prisma.InfectiousAgentsDelegate,
  InfectiousAgents
> {
  constructor(prisma: PrismaService) {
    super(prisma, (p) => p.infectiousAgents);
  }

  public async validateIfHasName(name: string): Promise<number> {
    return await this.prisma.infectiousAgents.count({ where: { name } });
  }
}
