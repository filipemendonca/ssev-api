import { Injectable } from "@nestjs/common";
import { SolicitationRepository } from "./solicitation.repository";
import { SolicitationDto } from "./dto/solicitation.dto";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { SuccessResponse } from "../../common/dto/response.dto";
import { Role } from "@prisma/client";
import { CurrentUserType } from "../../common/utils/current-user.util";

@Injectable()
export class SolicitationService {
  constructor(private readonly repo: SolicitationRepository) {}

  public async findAll(
    pagination: PaginationQueryDto,
    user?: CurrentUserType
  ): Promise<SuccessResponse<SolicitationDto[]>> {
    const where: any = {};

    if (user?.role === Role.VETERINARIO && user?.id) {
      where.userId = user.id;
    }

    const { items, total, hasNextPage, totalPages } = await this.repo.findAll(
      pagination,
      where
    );

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
