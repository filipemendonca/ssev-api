import { PrismaClient } from "@prisma/client";

export class BaseRepository<T> {
  protected readonly model: any;

  constructor(
    protected readonly prisma: PrismaClient,
    modelAccessor: (prisma: PrismaClient) => any
  ) {
    this.model = modelAccessor(prisma);
  }

  async findAll(params?: any): Promise<T[]> {
    return this.model.findMany(params);
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
