import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { SampleRepository } from "./sample.repository";
import { SampleDto, SampleFilterDto } from "./dto/sample.dto";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { SuccessResponse } from "../../common/dto/response.dto";

@Injectable()
export class SampleService {
  constructor(private readonly repo: SampleRepository) {}

  public async findAll(
    pagination: PaginationQueryDto
  ): Promise<SuccessResponse<SampleDto[]>> {
    const { items, total, totalPages, hasNextPage } =
      await this.repo.findAll(pagination);

    return new SuccessResponse(items, null, {
      total,
      limit: pagination.limit,
      currentPage: pagination.currentPage,
      totalPages,
      hasNextPage,
    });
  }

  public async findById(id: string): Promise<SampleDto | null> {
    return await this.repo.findById(id);
  }

  public async findByName(
    filter: SampleFilterDto
  ): Promise<SampleDto[] | null> {
    return await this.repo.findByName(filter.name);
  }

  public async create(data: SampleDto): Promise<SampleDto> {
    const validateInputData = await this.repo.validateIfHasName(data.name);

    if (validateInputData !== 0) {
      throw new UnprocessableEntityException(
        "Já existe um registro com o mesmo nome."
      );
    }

    return await this.repo.create(data);
  }

  public async update(id: string, data: SampleDto): Promise<SampleDto> {
    return await this.repo.update(id, data);
  }

  public async delete(id: string) {
    return await this.repo.delete(id);
  }
}
