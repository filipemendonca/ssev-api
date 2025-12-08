import {
  Controller,
  Get,
  NotFoundException,
  Param,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/auth.guard";
import { SolicitationHistoryDto } from "./dto/solicitation.history.dto";
import { SolicitationHistoryService } from "./solicitation.history.service";

@UseGuards(JwtAuthGuard)
@Controller("solicitationHistory")
export class SolicitationHistoryController {
  constructor(private readonly service: SolicitationHistoryService) {}

  @Get(":id")
  async findAllById(
    @Param("id") id: string
  ): Promise<SolicitationHistoryDto[]> {
    const data = await this.service.findManyBySolicitationId(id);

    if (data.length === 0) {
      throw new NotFoundException(`Nenhum registro encontrado.`);
    }

    return data;
  }
}
