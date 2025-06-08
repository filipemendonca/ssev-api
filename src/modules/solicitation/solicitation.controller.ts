import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/auth.guard";
import { SolicitationService } from "./solicitation.service";
import { SolicitationDto } from "./dto/solicitation.dto";
import { SuccessResponse } from "../../common/dto/response.dto";

@UseGuards(JwtAuthGuard)
@Controller("solicitation")
export class SolicitationController {
  constructor(private readonly service: SolicitationService) {}

  @Get()
  async findAll(): Promise<SuccessResponse<SolicitationDto[]>> {
    const data = await this.service.findAll();
    return new SuccessResponse<SolicitationDto[]>(data);
  }

  @Get(":id")
  async findOne(
    @Param("id") id: string
  ): Promise<SuccessResponse<SolicitationDto>> {
    const solcitaition = await this.service.findOne(id);

    if (!solcitaition) {
      throw new NotFoundException(`Solicitação não encontrada.`);
    }

    return new SuccessResponse<SolicitationDto>(solcitaition);
  }

  @Post()
  async create(
    @Body() data: SolicitationDto
  ): Promise<SuccessResponse<SolicitationDto>> {
    const newSolicitation = await this.service.create(data);

    if (newSolicitation === null) {
      throw new NotFoundException(`Erro ao criar a solicitação.`);
    }

    return new SuccessResponse<SolicitationDto>(
      newSolicitation,
      "Solicitação criado com sucesso."
    );
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() data: SolicitationDto
  ): Promise<SuccessResponse<SolicitationDto>> {
    const existingData = await this.service.findOne(id);

    if (!existingData) {
      throw new NotFoundException(`Solicitação não encontrada.`);
    }

    return new SuccessResponse<SolicitationDto>(
      await this.service.update(id, data),
      "Solicitação atualizado com sucesso."
    );
  }

  @Delete(":id")
  async delete(
    @Param("id") id: string
  ): Promise<SuccessResponse<SolicitationDto>> {
    const existingData = await this.service.findOne(id);

    if (!existingData) {
      throw new NotFoundException(`Solicitação não encontrada.`);
    }

    return new SuccessResponse<SolicitationDto>(await this.service.delete(id));
  }
}
