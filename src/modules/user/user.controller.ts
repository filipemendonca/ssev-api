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
  Patch,
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/auth.guard";
import { UserService } from "./user.service";
import { UpdateProfileDto, UserDto, UserViewDto } from "./dto/user.dto";
import { SuccessResponse } from "../../common/dto/response.dto";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { RolesGuard } from "../auth/guards/roles.guard";
import { Role } from "../../../generated/prisma";
import { Roles } from "../../common/decorators/roles.decorator";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { CurrentUserType } from "../../common/utils/current-user.util";
import { hash } from "bcryptjs";

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller("users")
@Roles(Role.ADMINISTRADOR)
export class UserController {
  constructor(private readonly service: UserService) {}

  @Get()
  async findAll(
    @Query() query: PaginationQueryDto,
  ): Promise<SuccessResponse<UserViewDto[]>> {
    const data = await this.service.findAll(query, {
      id: true,
      name: true,
      email: true,
      isActive: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    });

    if (data?.data?.length === 0) {
      throw new NotFoundException(`Nenhum registro encontrado.`);
    }

    return data;
  }

  @Get("/profile")
  async getProfile(
    @CurrentUser() user: CurrentUserType,
  ): Promise<SuccessResponse<UserViewDto>> {
    const data = await this.service.findOne(user.id, {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    });

    if (!data) {
      throw new NotFoundException(`Usuário não encontrado.`);
    }

    return new SuccessResponse<UserViewDto>(data);
  }

  @Patch("/profile/:id")
  async updateProfile(
    @Param("id") id: string,
    @Body() data: UpdateProfileDto,
  ): Promise<SuccessResponse<UserDto>> {
    const existingData = await this.service.findOne(id);

    if (!existingData) {
      throw new NotFoundException(`Usuário não encontrado.`);
    }

    const dataToUpdate: Partial<UserDto> = {
      name: data.name ?? existingData.name,
      email: data.email ?? existingData.email,
    };

    if (data.enableChangePassword) {
      if (data.newPassword === "" || data.repeatNewPassword === "") {
        throw new NotFoundException(`Preencha os campos de nova senha.`);
      }

      if (data.newPassword !== data.repeatNewPassword) {
        throw new NotFoundException(`As senhas não coincidem.`);
      }

      dataToUpdate.password = data.newPassword
        ? await hash(data.newPassword, 10)
        : existingData.password;
    }

    await this.service.update(id, dataToUpdate as UserDto);

    return new SuccessResponse<UserDto>(
      undefined,
      "Perfíl atualizado com sucesso.",
    );
  }

  @Get(":id")
  async findOne(
    @Param("id") id: string,
  ): Promise<SuccessResponse<UserViewDto>> {
    const data = await this.service.findOne(id, {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
    });

    if (!data) {
      throw new NotFoundException(`Usuário não encontrado.`);
    }

    return new SuccessResponse<UserViewDto>(data);
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
    @Body() data: UserDto,
  ): Promise<SuccessResponse<UserDto>> {
    const existingData = await this.service.findOne(id);

    if (!existingData) {
      throw new NotFoundException(`Usuário não encontrado.`);
    }

    return new SuccessResponse<UserDto>(
      await this.service.update(id, data),
      "Usuário atualizado com sucesso.",
    );
  }

  @Delete(":id")
  async delete(@Param("id") id: string): Promise<SuccessResponse<UserDto>> {
    const existingData = await this.service.findOne(id, {
      id: true,
      name: true,
      email: true,
    });

    if (!existingData) {
      throw new NotFoundException(`Usuário não encontrado.`);
    }

    return new SuccessResponse<UserDto>(await this.service.delete(id));
  }
}
