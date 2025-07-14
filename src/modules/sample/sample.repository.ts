import { Injectable } from "@nestjs/common";
import { Sample } from "@prisma/client";
import { PrismaService } from "prisma/prisma.service";
import { BaseRepository } from "../../common/base.repository";

@Injectable()
export class SampleRepository extends BaseRepository<Sample> {
  constructor(prisma: PrismaService) {
    super(prisma, (p) => p.sample);
  }

  public async validateIfHasName(name: string): Promise<number> {
    return await this.prisma.sample.count({ where: { name } });
  }
}
