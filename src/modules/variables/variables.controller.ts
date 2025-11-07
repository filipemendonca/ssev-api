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
import { Role } from "@prisma/client";
import { Roles } from "../../common/decorators/roles.decorator";
import { JwtAuthGuard } from "../auth/guards/auth.guard";
import { RolesGuard } from "../auth/guards/roles.guard";
import { VariablesService } from "./variables.service";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { SuccessResponse } from "../../common/dto/response.dto";
import { VariablesDto } from "./dto/variables.dto";
import { mapColumns } from "./util/util";

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller("variables")
@Roles(Role.ADMINISTRADOR)
export class VariablesController {
  constructor(private readonly service: VariablesService) {}

  @Get()
  async findAll(
    @Query() query: PaginationQueryDto
  ): Promise<SuccessResponse<VariablesDto[]>> {
    const data = await this.service.findAll(query);

    if (data?.data?.length === 0) {
      throw new NotFoundException(`Nenhum registro encontrado.`);
    }

    return data;
  }

  @Get(":id")
  async findOne(
    @Param("id") id: string
  ): Promise<SuccessResponse<VariablesDto>> {
    const data = await this.service.findOne(id);

    if (!data) {
      throw new NotFoundException(`Variável não encontrada.`);
    }

    return new SuccessResponse<VariablesDto>(data);
  }

  @Get("dropdown/listRelatedTables")
  async listRelatedTables(): Promise<SuccessResponse<string[]>> {
    return new SuccessResponse<string[]>(await this.service.listTables());
  }

  @Get("dropdown/listRelatedFields")
  async listRelatedFields(): Promise<SuccessResponse<string[]>> {
    const mappedColumns = await mapColumns(
      await this.service.listColumns("Solicitation")
    );
    return new SuccessResponse<string[]>(
      Object.entries(mappedColumns).map(([key, value]) => `${value}`)
    );
  }

  @Post()
  async create(
    @Body() data: VariablesDto
  ): Promise<SuccessResponse<VariablesDto>> {
    const newVariable = await this.service.create(data);

    if (newVariable === null) {
      throw new NotFoundException(`Erro ao criar variável.`);
    }

    return new SuccessResponse<VariablesDto>(
      newVariable,
      "Variável criada com sucesso."
    );
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() data: VariablesDto
  ): Promise<SuccessResponse<VariablesDto>> {
    const existingData = await this.service.findOne(id);

    if (!existingData) {
      throw new NotFoundException(`Variável não encontrada.`);
    }

    return new SuccessResponse<VariablesDto>(
      await this.service.update(id, data),
      "Variável atualizada com sucesso."
    );
  }

  @Delete(":id")
  async delete(
    @Param("id") id: string
  ): Promise<SuccessResponse<VariablesDto>> {
    const existingData = await this.service.findOne(id);

    if (!existingData) {
      throw new NotFoundException(`Variável não encontrada.`);
    }

    return new SuccessResponse<VariablesDto>(await this.service.delete(id));
  }
}
