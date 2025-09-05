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
import { SampleService } from "./sample.service";
import { SampleDto, SampleFilterDto } from "./dto/sample.dto";
import { SuccessResponse } from "../../common/dto/response.dto";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { Roles } from "../../common/decorators/roles.decorator";
import { Role } from "@prisma/client";
import { RolesGuard } from "../auth/guards/roles.guard";

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller("sample")
export class SampleController {
  constructor(private readonly service: SampleService) {}

  @Get()
  async findAll(
    @Query() query: PaginationQueryDto
  ): Promise<SuccessResponse<SampleDto[]>> {
    const { data } = await this.service.findAll(query);

    if (data.length === 0) {
      throw new NotFoundException(`Nenhum registro encontrado.`);
    }

    return this.service.findAll(query);
  }

  @Get(":id")
  @Roles(Role.ADMINISTRADOR)
  async findOne(@Param("id") id: string): Promise<SuccessResponse<SampleDto>> {
    const sample = await this.service.findById(id);

    if (!sample) {
      throw new NotFoundException(`Amostra não encontrada.`);
    }

    return new SuccessResponse<SampleDto>(sample);
  }

  @Post("/search")
  @Roles(Role.ADMINISTRADOR)
  async search(
    @Query() query: PaginationQueryDto,
    @Body() filter: SampleFilterDto
  ): Promise<SuccessResponse<SampleDto[]>> {
    const sample = await this.service.findAll(query, filter);

    if (!sample) {
      throw new NotFoundException(`Amostra não encontrada.`);
    }

    return sample;
  }

  @Post()
  @Roles(Role.ADMINISTRADOR)
  async create(@Body() data: SampleDto): Promise<SuccessResponse<SampleDto>> {
    const newSample = await this.service.create(data);

    if (newSample === null) {
      throw new NotFoundException(`Erro ao criar a amostra.`);
    }

    return new SuccessResponse<SampleDto>(
      newSample,
      "Amostra criada com sucesso."
    );
  }

  @Put(":id")
  @Roles(Role.ADMINISTRADOR)
  async update(
    @Param("id") id: string,
    @Body() data: SampleDto
  ): Promise<SuccessResponse<SampleDto>> {
    const existingSample = await this.service.findById(id);

    if (!existingSample) {
      throw new NotFoundException(`Amostra não encontrada.`);
    }

    return new SuccessResponse<SampleDto>(
      await this.service.update(id, data),
      "Amostra atualizada com sucesso."
    );
  }

  @Delete(":id")
  @Roles(Role.ADMINISTRADOR)
  async delete(@Param("id") id: string): Promise<SuccessResponse<SampleDto>> {
    const existingSample = await this.service.findById(id);

    if (!existingSample) {
      throw new NotFoundException(`Amostra não encontrada.`);
    }

    return new SuccessResponse<SampleDto>(await this.service.delete(id));
  }
}
