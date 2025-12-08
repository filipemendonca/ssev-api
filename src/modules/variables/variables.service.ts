import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { SuccessResponse } from "../../common/dto/response.dto";
import { VariablesDto } from "./dto/variables.dto";
import { ColumnResponse } from "./util/util";
import { VariablesRepository } from "./variables.repository";

@Injectable()
export class VariablesService {
  constructor(private readonly repo: VariablesRepository) {}

  public async findAll(
    pagination: PaginationQueryDto
  ): Promise<SuccessResponse<VariablesDto[]>> {
    const { items, total, hasNextPage, totalPages } =
      await this.repo.findAll(pagination);

    return new SuccessResponse(items, null, {
      total,
      limit: pagination.limit,
      currentPage: pagination.currentPage,
      totalPages,
      hasNextPage,
    });
  }

  public async findAllWithoutPagination(): Promise<Record<string, string>> {
    const variablesFromDb = await this.repo.findAllWithoutPagination();
    if (variablesFromDb.length !== 0) {
      return variablesFromDb.reduce((acc, variable) => {
        acc[variable.fieldRelated] = variable.variableName;
        return acc;
      }, {});
    }
    return {};
  }

  public async findOne(id: string): Promise<VariablesDto | null> {
    return await this.repo.findById(id);
  }

  public async findBy(email?: string): Promise<VariablesDto> {
    return await this.repo.findOne({
      where: {
        email: email,
      },
    });
  }

  public async create(data: VariablesDto): Promise<VariablesDto> {
    const hasKey = await this.repo.validateIfHasVariable(data.variableName);

    if (hasKey !== 0) {
      throw new UnprocessableEntityException(
        "Já existe uma variável com este nome."
      );
    }

    return this.repo.create(data);
  }

  public async update(id: string, data: VariablesDto): Promise<VariablesDto> {
    return await this.repo.update(id, data);
  }

  public async delete(id: string) {
    return await this.repo.delete(id);
  }

  async listTables(): Promise<string[]> {
    return await this.repo.listDataBaseTables();
  }

  async listColumns(table: string): Promise<ColumnResponse> {
    return await this.repo.listColumnsFromTable(table);
  }
}
