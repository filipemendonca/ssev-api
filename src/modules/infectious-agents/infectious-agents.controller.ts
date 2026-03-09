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
import {
  InfectiousAgentsDto,
  InfectiousAgentsFilterDto,
} from "./dto/infectious-agents.dto";
import { RolesGuard } from "../auth/guards/roles.guard";
import { Role } from "../../../generated/prisma";
import { Roles } from "../../common/decorators/roles.decorator";

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller("infectious-agents")
export class InfectiousAgentsController {
  constructor(private readonly service: InfectiousAgentsService) {}

  @Get()
  async findAll(
    @Query() query: PaginationQueryDto,
  ): Promise<SuccessResponse<InfectiousAgentsDto[]>> {
    const data = await this.service.findAll(query);

    if (data?.data?.length === 0) {
      throw new NotFoundException(`Nenhum registro encontrado.`);
    }

    return data;
  }

  @Get(":id")
  @Roles(Role.ADMINISTRADOR)
  async findOne(
    @Param("id") id: string,
  ): Promise<SuccessResponse<InfectiousAgentsDto>> {
    const exam = await this.service.findOne(id);

    if (!exam) {
      throw new NotFoundException(`Agente infeccioso não encontrado.`);
    }

    return new SuccessResponse<InfectiousAgentsDto>(exam);
  }

  @Post("/search")
  @Roles(Role.ADMINISTRADOR)
  async search(
    @Query() query: PaginationQueryDto,
    @Body() filter: InfectiousAgentsFilterDto,
  ): Promise<SuccessResponse<InfectiousAgentsDto[]>> {
    const infectiouAgents = await this.service.findAll(query, filter);

    if (!infectiouAgents) {
      throw new NotFoundException(`Amostra não encontrada.`);
    }

    return infectiouAgents;
  }

  @Post()
  @Roles(Role.ADMINISTRADOR)
  async create(
    @Body() data: InfectiousAgentsDto,
  ): Promise<SuccessResponse<InfectiousAgentsDto>> {
    const newExam = await this.service.create(data);

    if (newExam === null) {
      throw new NotFoundException(`Erro ao criar o agente infeccioso.`);
    }

    return new SuccessResponse<InfectiousAgentsDto>(
      newExam,
      "Agente infeccioso criado com sucesso.",
    );
  }

  @Put(":id")
  @Roles(Role.ADMINISTRADOR)
  async update(
    @Param("id") id: string,
    @Body() data: InfectiousAgentsDto,
  ): Promise<SuccessResponse<InfectiousAgentsDto>> {
    const existingExam = await this.service.findOne(id);

    if (!existingExam) {
      throw new NotFoundException(`Agente infeccioso não encontrado.`);
    }

    return new SuccessResponse<InfectiousAgentsDto>(
      await this.service.update(id, data),
      "Agente infeccioso atualizado com sucesso.",
    );
  }

  @Delete(":id")
  @Roles(Role.ADMINISTRADOR)
  async delete(
    @Param("id") id: string,
  ): Promise<SuccessResponse<InfectiousAgentsDto>> {
    const existingExam = await this.service.findOne(id);

    if (!existingExam) {
      throw new NotFoundException(`Agente infeccioso não encontrado.`);
    }

    return new SuccessResponse<InfectiousAgentsDto>(
      await this.service.delete(id),
    );
  }
}
