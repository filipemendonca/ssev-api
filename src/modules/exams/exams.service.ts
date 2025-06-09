import { Injectable } from "@nestjs/common";
import { ExamsRepository } from "./exams.repository";
import { ExamsDto } from "./dto/exams.dto";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { SuccessResponse } from "../../common/dto/response.dto";

@Injectable()
export class ExamsService {
  constructor(private readonly repo: ExamsRepository) {}

  public async findAll(
    pagination: PaginationQueryDto
  ): Promise<SuccessResponse<ExamsDto[]>> {
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

  public async findOne(id: string): Promise<ExamsDto | null> {
    return await this.repo.findById(id);
  }

  public async create(data: ExamsDto): Promise<ExamsDto> {
    return this.repo.create(data);
  }

  public async update(id: string, data: ExamsDto): Promise<ExamsDto> {
    return await this.repo.update(id, data);
  }

  public async delete(id: string) {
    return await this.repo.delete(id);
  }
}
