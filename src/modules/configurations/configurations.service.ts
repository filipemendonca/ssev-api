import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { ConfigurationsRepository } from "./configurations.repository";
import { ConfigurationsDto } from "./dto/configurations.dto";

@Injectable()
export class ConfigurationsService {
  constructor(private readonly repo: ConfigurationsRepository) {}

  public async findById(id: string): Promise<ConfigurationsDto | null> {
    return await this.repo.findById(id);
  }

  public async create(data: ConfigurationsDto): Promise<ConfigurationsDto> {
    const validateInputData = await this.repo.validateIfAlreadyExistsConfiguration();

    if (validateInputData) {
      throw new UnprocessableEntityException(
        "Já existe uma configuração definida no sistema.",
      );
    }

    return await this.repo.create(data);
  }

  public async update(id: string, data: ConfigurationsDto): Promise<ConfigurationsDto> {
    return await this.repo.update(id, data);
  }

  public async delete(id: string) {
    return await this.repo.delete(id);
  }
}
