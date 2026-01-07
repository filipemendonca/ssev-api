import { PrismaClient } from "@prisma/client";
import { PaginationQueryDto } from "./dto/pagination-query.dto";

type WhereArg<TDelegate extends DelegateMethods> =
  NonNullable<Parameters<TDelegate["findMany"]>[0]> extends { where?: infer W }
    ? W
    : never;

type DelegateMethods = {
  findMany: (...args: any[]) => any;
  count: (...args: any[]) => any;
  findFirst: (...args: any[]) => any;
  findUnique: (...args: any[]) => any;
  create: (...args: any[]) => any;
  update: (...args: any[]) => any;
  delete: (...args: any[]) => any;
};

export class BaseRepository<TDelegate extends DelegateMethods, TEntity> {
  protected readonly model: TDelegate;

  constructor(
    protected readonly prisma: PrismaClient,
    modelAccessor: (prisma: PrismaClient) => TDelegate
  ) {
    this.model = modelAccessor(prisma);
  }

  async findAll(
    pagination: PaginationQueryDto,
    filters?: WhereArg<TDelegate>,
    select?: any
  ) {
    const { limit, currentPage } = pagination;

    const skip = (currentPage - 1) * limit;

    const [items, total] = await Promise.all([
      this.model.findMany({
        where: filters,
        select,
        orderBy: [
          {
            createdAt: "desc",
          },
          {
            updatedAt: "desc",
          },
        ],
        skip: skip,
        take: limit,
      }),
      this.model.count(),
    ]);

    const totalPages = Math.ceil(total / limit);
    const hasNextPage =
      (pagination.currentPage - 1) * pagination.limit + pagination.limit <
      total;

    return { items: items as TEntity[], total, totalPages, hasNextPage };
  }

  async findAllWithoutPagination(
    filters?: WhereArg<TDelegate>,
    include?: any,
    select?: any
  ) {
    const items = await this.model.findMany({
      where: filters,
      include: include,
      select: select,
    });
    return items as TEntity[];
  }

  async findOne(params: any): Promise<TEntity | null> {
    return this.model.findFirst(params);
  }

  async findFirst(
    filters?: WhereArg<TDelegate>,
    orderBy?: any[],
    select?: any
  ): Promise<TEntity | null> {
    return this.model.findFirst({ where: filters, orderBy: orderBy, select });
  }

  async findById(id: string, select?: any): Promise<TEntity | null> {
    return this.model.findUnique({ where: { id }, select });
  }

  async findMany(params: any): Promise<TEntity[] | null> {
    return await this.model.findMany(params);
  }

  async create(data: Partial<TEntity>): Promise<TEntity> {
    return this.model.create({ data });
  }

  async update(id: string, data: Partial<TEntity>): Promise<TEntity> {
    try {
      return this.model.update({ where: { id }, data });
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id: string): Promise<TEntity> {
    return this.model.delete({ where: { id } });
  }
}
