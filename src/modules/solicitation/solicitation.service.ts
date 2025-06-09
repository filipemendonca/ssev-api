import { Injectable } from "@nestjs/common";
import { SolicitationRepository } from "./solicitation.repository";
import { SolicitationDto } from "./dto/solicitation.dto";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { SuccessResponse } from "../../common/dto/response.dto";

@Injectable()
export class SolicitationService {
  constructor(private readonly repo: SolicitationRepository) {}

  public async findAll(
    pagination: PaginationQueryDto
  ): Promise<SuccessResponse<SolicitationDto[]>> {
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

  public async findOne(id: string): Promise<SolicitationDto | null> {
    return await this.repo.findById(id);
  }

  public async create(data: SolicitationDto): Promise<SolicitationDto> {
    return this.repo.create(data);
  }

  public async update(
    id: string,
    data: SolicitationDto
  ): Promise<SolicitationDto> {
    return await this.repo.update(id, data);
  }

  public async delete(id: string) {
    return await this.repo.delete(id);
  }
}
