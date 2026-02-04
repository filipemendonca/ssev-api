import { Injectable } from "@nestjs/common";
import { SolicitationHistoryDto } from "./dto/solicitation.history.dto";
import { SolicitationHistoryRepository } from "./solicitation.history.repository";
import { SolicitationStatus } from "../../../prisma/generated";

@Injectable()
export class SolicitationHistoryService {
  constructor(private readonly repo: SolicitationHistoryRepository) {}

  public async findManyBySolicitationId(
    solicitationId: string,
  ): Promise<SolicitationHistoryDto[]> {
    const where: any = {};
    where.solicitationId = solicitationId;
    const include = { changedBy: { select: { name: true } } };
    const solicitationHistories = await this.repo.findAllWithoutPagination(
      where,
      include,
    );
    return solicitationHistories;
  }

  public async findLastSolicitationHistoryToUnblockSolicitation(
    solicitationId: string,
  ): Promise<SolicitationHistoryDto> {
    try {
      const where: any = {};
      where.solicitationId = solicitationId;
      where.newStatus = { not: SolicitationStatus.BLOQUEADO };
      const orderBy = [{ changedAt: "desc" }];

      const solicitationHistories = await this.repo.findFirst(where, orderBy);
      return solicitationHistories;
    } catch (error) {
      console.error(error);
    }
  }

  public async findLastBySolicitationId(
    solicitationId: string,
  ): Promise<SolicitationHistoryDto | null> {
    try {
      const solicitationHistory = await this.repo.findOne({
        where: { solicitationId },
        orderBy: { changedAt: "desc" },
      });
      return solicitationHistory;
    } catch (error) {
      console.error(error);
    }
  }

  public async create(
    data: SolicitationHistoryDto,
  ): Promise<SolicitationHistoryDto> {
    return this.repo.create(data);
  }

  public async update(
    id: string,
    data: SolicitationHistoryDto,
  ): Promise<SolicitationHistoryDto> {
    return await this.repo.update(id, data);
  }

  public async delete(id: string) {
    return await this.repo.delete(id);
  }
}
