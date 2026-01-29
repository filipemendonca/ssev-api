import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { SuccessResponse } from "../../common/dto/response.dto";
import { ExamsDto, ExamsFilterDto } from "./dto/exams.dto";
import { ExamsRepository } from "./exams.repository";

@Injectable()
export class ExamsService {
  constructor(private readonly repo: ExamsRepository) {}

  public async findAll(
    pagination: PaginationQueryDto,
    filter?: ExamsFilterDto,
  ): Promise<SuccessResponse<ExamsDto[]>> {
    const where: any = {};

    if (filter?.name) {
      where.name = { contains: filter.name, mode: "insensitive" };
    }

    const { items, total, hasNextPage, totalPages } = await this.repo.findAll(
      pagination,
      where,
    );

    return new SuccessResponse(items, null, {
      total,
      limit: pagination.limit,
      currentPage: pagination.currentPage,
      totalPages,
      hasNextPage,
    });
  }

  public async findAllWithoutPagination(ids?: string[]): Promise<ExamsDto[]> {
    const where: any = {};

    if (ids && ids.length > 0) {
      where.id = { in: ids };
    }

    return await this.repo.findAllWithoutPagination(where);
  }

  public async findOne(id: string): Promise<ExamsDto | null> {
    return await this.repo.findById(id);
  }

  public async create(data: ExamsDto): Promise<ExamsDto> {
    const validateInputData = await this.repo.validateIfHasName(data.name);

    if (validateInputData !== 0) {
      throw new UnprocessableEntityException(
        "Já existe um registro com o mesmo nome.",
      );
    }

    return await this.repo.create(data);
  }

  public async update(id: string, data: ExamsDto): Promise<ExamsDto> {
    return await this.repo.update(id, data);
  }

  public async delete(id: string) {
    return await this.repo.delete(id);
  }
}
