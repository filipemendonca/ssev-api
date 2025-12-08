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
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { SuccessResponse } from "../../common/dto/response.dto";
import { JwtAuthGuard } from "../auth/guards/auth.guard";
import { RolesGuard } from "../auth/guards/roles.guard";
import { ExamsDto, ExamsFilterDto } from "./dto/exams.dto";
import { ExamsService } from "./exams.service";

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller("exams")
export class ExamsController {
  constructor(private readonly service: ExamsService) {}

  @Get()
  async findAll(
    @Query() query: PaginationQueryDto
  ): Promise<SuccessResponse<ExamsDto[]>> {
    const data = await this.service.findAll(query);

    if (data?.data?.length === 0) {
      throw new NotFoundException(`Nenhum registro encontrado.`);
    }

    return data;
  }

  @Get(":id")
  @Roles(Role.ADMINISTRADOR)
  async findOne(@Param("id") id: string): Promise<SuccessResponse<ExamsDto>> {
    const exam = await this.service.findOne(id);

    if (!exam) {
      throw new NotFoundException(`Exame não encontrado.`);
    }

    return new SuccessResponse<ExamsDto>(exam);
  }

  @Post("/search")
  @Roles(Role.ADMINISTRADOR)
  async search(
    @Query() query: PaginationQueryDto,
    @Body() filter: ExamsFilterDto
  ): Promise<SuccessResponse<ExamsDto[]>> {
    const exams = await this.service.findAll(query, filter);

    if (!exams) {
      throw new NotFoundException(`Exame não encontrado.`);
    }

    return exams;
  }

  @Post()
  @Roles(Role.ADMINISTRADOR)
  async create(@Body() data: ExamsDto): Promise<SuccessResponse<ExamsDto>> {
    const newExam = await this.service.create(data);

    if (newExam === null) {
      throw new NotFoundException(`Erro ao criar o exame.`);
    }

    return new SuccessResponse<ExamsDto>(newExam, "Exame criado com sucesso.");
  }

  @Put(":id")
  @Roles(Role.ADMINISTRADOR)
  async update(
    @Param("id") id: string,
    @Body() data: ExamsDto
  ): Promise<SuccessResponse<ExamsDto>> {
    const existingExam = await this.service.findOne(id);

    if (!existingExam) {
      throw new NotFoundException(`Exame não encontrado.`);
    }

    return new SuccessResponse<ExamsDto>(
      await this.service.update(id, data),
      "Exame atualizado com sucesso."
    );
  }

  @Delete(":id")
  @Roles(Role.ADMINISTRADOR)
  async delete(@Param("id") id: string): Promise<SuccessResponse<ExamsDto>> {
    const existingExam = await this.service.findOne(id);

    if (!existingExam) {
      throw new NotFoundException(`Exame não encontrado.`);
    }

    return new SuccessResponse<ExamsDto>(await this.service.delete(id));
  }
}
