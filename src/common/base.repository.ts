import { PrismaClient } from "@prisma/client";
import { PaginationQueryDto } from "./dto/pagination-query.dto";

export class BaseRepository<T> {
  protected readonly model: any;

  constructor(
    protected readonly prisma: PrismaClient,
    modelAccessor: (prisma: PrismaClient) => any
  ) {
    this.model = modelAccessor(prisma);
  }

  async findAll(pagination: PaginationQueryDto) {
    const { limit, currentPage } = pagination;

    const skip = (currentPage - 1) * limit;

    const [items, total] = await Promise.all([
      this.model.findMany({
        skip: skip,
        take: limit,
      }),
      this.model.count(),
    ]);

    const totalPages = Math.ceil(total / limit);
    const hasNextPage =
      (pagination.currentPage - 1) * pagination.limit + pagination.limit <
      total;

    return { items, total, totalPages, hasNextPage };
  }

  async findOne(params: any): Promise<T | null> {
    return this.model.findFirst(params);
  }

  async findById(id: string): Promise<T | null> {
    return this.model.findUnique({ where: { id } });
  }

  async create(data: Partial<T>): Promise<T> {
    return this.model.create({ data });
  }

  async update(id: string, data: Partial<T>): Promise<T> {
    return this.model.update({ where: { id }, data });
  }

  async delete(id: string): Promise<T> {
    return this.model.delete({ where: { id } });
  }
}
