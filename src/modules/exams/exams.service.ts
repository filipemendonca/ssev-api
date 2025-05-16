import { Injectable } from "@nestjs/common";
import { ExamsRepository } from "./exams.repository";
import { ExamsDto } from "./dto/exams.dto";

@Injectable()
export class ExamsService {
  constructor(private readonly repo: ExamsRepository) {}

  public async findAll(): Promise<ExamsDto[]> {
    return await this.repo.findAll();
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
