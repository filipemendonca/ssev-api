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
import { ExamsService } from "./exams.service";
import { ExamsDto } from "./dto/exams.dto";
import { SuccessResponse } from "../../common/dto/response.dto";

@UseGuards(JwtAuthGuard)
@Controller("exams")
export class ExamsController {
  constructor(private readonly service: ExamsService) {}

  @Get()
  async findAll(): Promise<SuccessResponse<ExamsDto[]>> {
    const exams = await this.service.findAll();
    return new SuccessResponse<ExamsDto[]>(exams);
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<SuccessResponse<ExamsDto>> {
    const exam = await this.service.findOne(id);

    if (!exam) {
      throw new NotFoundException(`Exame não encontrado.`);
    }

    return new SuccessResponse<ExamsDto>(exam);
  }

  @Post()
  async create(@Body() data: ExamsDto): Promise<SuccessResponse<ExamsDto>> {
    const newExam = await this.service.create(data);

    if (newExam === null) {
      throw new NotFoundException(`Erro ao criar o exame.`);
    }

    return new SuccessResponse<ExamsDto>(newExam, "Exame criado com sucesso.");
  }

  @Put(":id")
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
  async delete(@Param("id") id: string): Promise<SuccessResponse<ExamsDto>> {
    const existingExam = await this.service.findOne(id);

    if (!existingExam) {
      throw new NotFoundException(`Exame não encontrado.`);
    }

    return new SuccessResponse<ExamsDto>(await this.service.delete(id));
  }
}
