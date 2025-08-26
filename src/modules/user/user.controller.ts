import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
  NotFoundException,
  Query,
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/auth.guard";
import { UserService } from "./user.service";
import { UserDto } from "./dto/user.dto";
import { SuccessResponse } from "../../common/dto/response.dto";
import { PaginationQueryDto } from "src/common/dto/pagination-query.dto";

@UseGuards(JwtAuthGuard)
@Controller("users")
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async findAll(
    @Query() query: PaginationQueryDto
  ): Promise<SuccessResponse<UserDto[]>> {
    const { data } = await this.service.findAll(query);

    if (data.length === 0) {
      throw new NotFoundException(`Nenhum registro encontrado.`);
    }

    return this.service.findAll(query);
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<SuccessResponse<UserDto>> {
    const data = await this.service.findOne(id);

    if (!data) {
      throw new NotFoundException(`Usuário não encontrado.`);
    }

    return new SuccessResponse<UserDto>(data);
  }

  @Post()
  async create(@Body() data: UserDto): Promise<SuccessResponse<UserDto>> {
    const newUser = await this.service.create(data);

    if (newUser === null) {
      throw new NotFoundException(`Erro ao criar usuário.`);
    }

    return new SuccessResponse<UserDto>(newUser, "Usuário criado com sucesso.");
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() data: UserDto
  ): Promise<SuccessResponse<UserDto>> {
    const existingData = await this.service.findOne(id);

    if (!existingData) {
      throw new NotFoundException(`Usuário não encontrado.`);
    }

    return new SuccessResponse<UserDto>(
      await this.service.update(id, data),
      "Usuário atualizado com sucesso."
    );
  }

  @Delete(":id")
  async delete(@Param("id") id: string): Promise<SuccessResponse<UserDto>> {
    const existingData = await this.service.findOne(id);

    if (!existingData) {
      throw new NotFoundException(`Usuário não encontrado.`);
    }

    return new SuccessResponse<UserDto>(await this.service.delete(id));
  }
}
