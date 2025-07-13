import {
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/auth.guard";
import { SuccessResponse } from "../../common/dto/response.dto";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { InfectiousAgentsService } from "./infectious-agents.service";
import { InfectiousAgentsDto } from "./dto/infectious-agents.dto";

// @UseGuards(JwtAuthGuard)
@Controller("infectious-agents")
export class InfectiousAgentsController {
  constructor(private readonly service: InfectiousAgentsService) {}

  @Get()
  async findAll(
    @Query() query: PaginationQueryDto
  ): Promise<SuccessResponse<InfectiousAgentsDto[]>> {
    const { data } = await this.service.findAll(query);

    if (data.length === 0) {
      throw new NotFoundException(`Nenhum registro encontrado.`);
    }

    return this.service.findAll(query);
  }

  @Get(":id")
  async findOne(
    @Param("id") id: string
  ): Promise<SuccessResponse<InfectiousAgentsDto>> {
    const exam = await this.service.findOne(id);

    if (!exam) {
      throw new NotFoundException(`Agente infeccioso não encontrado.`);
    }

    return new SuccessResponse<InfectiousAgentsDto>(exam);
  }

  @Post()
  async create(
    @Body() data: InfectiousAgentsDto
  ): Promise<SuccessResponse<InfectiousAgentsDto>> {
    const newExam = await this.service.create(data);

    if (newExam === null) {
      throw new NotFoundException(`Erro ao criar o agente infeccioso.`);
    }

    return new SuccessResponse<InfectiousAgentsDto>(
      newExam,
      "Agente infeccioso criado com sucesso."
    );
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() data: InfectiousAgentsDto
  ): Promise<SuccessResponse<InfectiousAgentsDto>> {
    const existingExam = await this.service.findOne(id);

    if (!existingExam) {
      throw new NotFoundException(`Agente infeccioso não encontrado.`);
    }

    return new SuccessResponse<InfectiousAgentsDto>(
      await this.service.update(id, data),
      "Agente infeccioso atualizado com sucesso."
    );
  }

  @Delete(":id")
  async delete(
    @Param("id") id: string
  ): Promise<SuccessResponse<InfectiousAgentsDto>> {
    const existingExam = await this.service.findOne(id);

    if (!existingExam) {
      throw new NotFoundException(`Agente infeccioso não encontrado.`);
    }

    return new SuccessResponse<InfectiousAgentsDto>(
      await this.service.delete(id)
    );
  }
}
