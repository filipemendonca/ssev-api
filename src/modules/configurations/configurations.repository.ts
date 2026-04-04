import { Injectable } from "@nestjs/common";
import { Configurations, Prisma } from "../../../generated/prisma";
import { PrismaService } from "../../../prisma/prisma.service";
import { BaseRepository } from "../../common/base.repository";

@Injectable()
export class ConfigurationsRepository extends BaseRepository<
  Prisma.ConfigurationsDelegate,
  Configurations
> {
  constructor(prisma: PrismaService) {
    super(prisma, (p) => p.configurations);
  }

  public async validateIfAlreadyExistsConfiguration(): Promise<boolean> {
    return (await this.prisma.configurations.count()) > 0;
  }
}
