import { Injectable } from "@nestjs/common";
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

  findOne(id: string) {
    return this.repo.findById(id);
  }

  create(data: InfectiousAgentsDto) {
    return this.repo.create(data);
  }

  update(id: string, data: InfectiousAgentsDto) {
    return this.repo.update(id, data);
  }

  delete(id: string) {
    return this.repo.delete(id);
  }
}
