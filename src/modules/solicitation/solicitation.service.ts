import { Injectable } from "@nestjs/common";
import { SolicitationRepository } from "./solicitation.repository";
import { SolicitationDto } from "./dto/solicitation.dto";

@Injectable()
export class SolicitationService {
  constructor(private readonly repo: SolicitationRepository) {}

  public async findAll(): Promise<SolicitationDto[]> {
    return await this.repo.findAll();
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
