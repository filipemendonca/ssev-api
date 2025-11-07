import { Injectable } from "@nestjs/common";
import { Prisma, Variables } from "@prisma/client";
import { BaseRepository } from "../../common/base.repository";
import { PrismaService } from "prisma/prisma.service";

@Injectable()
export class VariablesRepository extends BaseRepository<
  Prisma.VariablesDelegate,
  Variables
> {
  constructor(prisma: PrismaService) {
    super(prisma, (p) => p.variables);
  }

  public async validateIfHasVariable(key: string): Promise<number> {
    return await this.prisma.variables.count({ where: { key } });
  }

  async listDataBaseTables(): Promise<string[]> {
    const result = await this.prisma.$queryRaw<
      { table_name: string }[]
    >`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`;

    return result.map((r) => r.table_name);
  }

  async listColumnsFromTable(tabela: string): Promise<any> {
    const result = await this.prisma.$queryRawUnsafe(`
      SELECT 
        column_name        
      FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = '${tabela}';
    `);

    return result;
  }
}
