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
import { SampleService } from "./sample.service";
import { SampleDto } from "./dto/sample.dto";

@UseGuards(JwtAuthGuard)
@Controller("sample")
export class SampleController {
  constructor(private readonly service: SampleService) {}

  @Get()
  async findAll(): Promise<SampleDto[]> {
    return await this.service.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<SampleDto | null> {
    return this.service.findOne(id);
  }

  @Post()
  async create(@Body() data: SampleDto): Promise<SampleDto> {
    return this.service.create(data);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() data: SampleDto
  ): Promise<SampleDto> {
    return this.service.update(id, data);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.service.delete(id);
  }
}
