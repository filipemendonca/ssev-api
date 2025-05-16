import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/auth.guard";
import { ExamsService } from "./exams.service";
import { ExamsDto } from "./dto/exams.dto";

@UseGuards(JwtAuthGuard)
@Controller("exams")
export class ExamsController {
  constructor(private readonly service: ExamsService) {}

  @Get()
  async findAll(): Promise<ExamsDto[]> {
    return await this.service.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<ExamsDto | null> {
    return this.service.findOne(id);
  }

  @Post()
  async create(@Body() data: ExamsDto): Promise<ExamsDto> {
    return this.service.create(data);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() data: ExamsDto
  ): Promise<ExamsDto> {
    return this.service.update(id, data);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.service.delete(id);
  }
}
