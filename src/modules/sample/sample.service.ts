import { Injectable } from "@nestjs/common";
import { SampleRepository } from "./sample.repository";
import { SampleDto } from "./dto/sample.dto";

@Injectable()
export class SampleService {
  constructor(private readonly repo: SampleRepository) {}

  public async findAll(): Promise<SampleDto[]> {
    return await this.repo.findAll();
  }

  public async findOne(id: string): Promise<SampleDto | null> {
    return await this.repo.findById(id);
  }

  public async create(data: SampleDto): Promise<SampleDto> {
    return this.repo.create(data);
  }

  public async update(id: string, data: SampleDto): Promise<SampleDto> {
    return await this.repo.update(id, data);
  }

  public async delete(id: string) {
    return await this.repo.delete(id);
  }
}
