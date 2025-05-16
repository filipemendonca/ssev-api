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
import { SolicitationService } from "./solicitation.service";
import { SolicitationDto } from "./dto/solicitation.dto";

@UseGuards(JwtAuthGuard)
@Controller("solicitation")
export class SolicitationController {
  constructor(private readonly service: SolicitationService) {}

  @Get()
  async findAll(): Promise<SolicitationDto[]> {
    return await this.service.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<SolicitationDto | null> {
    return this.service.findOne(id);
  }

  @Post()
  async create(@Body() data: SolicitationDto): Promise<SolicitationDto> {
    return this.service.create(data);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() data: SolicitationDto
  ): Promise<SolicitationDto> {
    return this.service.update(id, data);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.service.delete(id);
  }
}
