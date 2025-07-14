import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { InfectiousAgentsRepository } from "./infectious-agents.repository";
import { InfectiousAgentsDto } from "./dto/infectious-agents.dto";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { SuccessResponse } from "../../common/dto/response.dto";

@Injectable()
export class InfectiousAgentsService {
  constructor(private readonly repo: InfectiousAgentsRepository) {}

  public async findAll(
    pagination: PaginationQueryDto
  ): Promise<SuccessResponse<InfectiousAgentsDto[]>> {
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

  public async findOne(id: string) {
    return await this.repo.findById(id);
  }

  public async create(data: InfectiousAgentsDto) {
    const validateInputData = await this.repo.validateIfHasName(data.name);

    if (validateInputData !== 0) {
      throw new UnprocessableEntityException(
        "Já existe um registro com o mesmo nome."
      );
    }
    return await this.repo.create(data);
  }

  public async update(id: string, data: InfectiousAgentsDto) {
    return await this.repo.update(id, data);
  }

  public async delete(id: string) {
    return await this.repo.delete(id);
  }
}
