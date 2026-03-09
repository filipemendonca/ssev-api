import { Injectable } from "@nestjs/common";
import { Prisma, Variables } from "../../../generated/prisma";
import { ColumnResponse } from "./util/util";
import { PrismaService } from "../../../prisma/prisma.service";
import { BaseRepository } from "../../common/base.repository";

@Injectable()
export class VariablesRepository extends BaseRepository<
  Prisma.VariablesDelegate,
  Variables
> {
  constructor(prisma: PrismaService) {
    super(prisma, (p) => p.variables);
  }

  public async validateIfHasVariable(variableName: string): Promise<number> {
    return await this.prisma.variables.count({ where: { variableName } });
  }

  async listDataBaseTables(): Promise<string[]> {
    const result = await this.prisma.$queryRaw<
      { table_name: string }[]
    >`SELECT table_name FROM information_schema.tables WHERE table_schema = 'public'`;

    return result.map((r) => r.table_name);
  }

  async listColumnsFromTable(tabela: string): Promise<ColumnResponse> {
    const excludedColumns = `'id',
    'isdeleted',
    'createdat',
    'updatedat',
    'canceledat',
    'blockedat',
    'blockedcause',
    'canceledcause',
    'userid'`;

    const result = await this.prisma.$queryRawUnsafe<ColumnResponse>(`
      SELECT 
        column_name        
      FROM information_schema.columns
      WHERE table_schema = 'public' AND table_name = '${tabela}' AND lower(column_name) NOT IN (${excludedColumns});
    `);

    return result;
  }
}
