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
import { SampleService } from "./sample.service";
import { SampleDto } from "./dto/sample.dto";
import { SuccessResponse } from "../../common/dto/response.dto";

@UseGuards(JwtAuthGuard)
@Controller("sample")
export class SampleController {
  constructor(private readonly service: SampleService) {}

  @Get()
  async findAll(): Promise<SuccessResponse<SampleDto[]>> {
    const samples = await this.service.findAll();
    return new SuccessResponse<SampleDto[]>(samples);
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<SuccessResponse<SampleDto>> {
    const sample = await this.service.findOne(id);

    if (!sample) {
      throw new NotFoundException(`Amostra não encontrada.`);
    }

    return new SuccessResponse<SampleDto>(sample);
  }

  @Post()
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
  async update(
    @Param("id") id: string,
    @Body() data: SampleDto
  ): Promise<SuccessResponse<SampleDto>> {
    const existingSample = await this.service.findOne(id);

    if (!existingSample) {
      throw new NotFoundException(`Amostra não encontrada.`);
    }

    return new SuccessResponse<SampleDto>(
      await this.service.update(id, data),
      "Amostra atualizada com sucesso."
    );
  }

  @Delete(":id")
  async delete(@Param("id") id: string): Promise<SuccessResponse<SampleDto>> {
    const existingSample = await this.service.findOne(id);

    if (!existingSample) {
      throw new NotFoundException(`Amostra não encontrada.`);
    }

    return new SuccessResponse<SampleDto>(await this.service.delete(id));
  }
}
