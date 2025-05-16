import { Injectable } from "@nestjs/common";
import { InfectiousAgentsRepository } from "./infectious-agents.repository";
import { InfectiousAgentsDto } from "./dto/infectious-agents.dto";

@Injectable()
export class InfectiousAgentsService {
  constructor(private readonly repo: InfectiousAgentsRepository) {}

  findAll() {
    return this.repo.findAll();
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
