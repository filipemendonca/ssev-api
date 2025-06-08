import { Injectable } from "@nestjs/common";
import { Sample } from "@prisma/client";
import { BaseRepository } from "../../common/base.repository";
import { PrismaService } from "prisma/prisma.service";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";

@Injectable()
export class SampleRepository extends BaseRepository<Sample> {
  constructor(prisma: PrismaService) {
    super(prisma, (p) => p.sample);
  }

  // async findAllPaginated(pagination: PaginationQueryDto) {
  //   const { limit, skip } = pagination;

  //   const [items, total] = await Promise.all([
  //     this.prisma.sample.findMany({
  //       skip: skip,
  //       take: limit,
  //     }),
  //     this.prisma.sample.count(),
  //   ]);

  //   return { items, total };
  // }
}
