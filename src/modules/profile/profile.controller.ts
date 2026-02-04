import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  UseGuards,
} from "@nestjs/common";
import { hash } from "bcryptjs";
import { CurrentUser } from "../../common/decorators/current-user.decorator";
import { SuccessResponse } from "../../common/dto/response.dto";
import { CurrentUserType } from "../../common/utils/current-user.util";
import { JwtAuthGuard } from "../auth/guards/auth.guard";
import { RolesGuard } from "../auth/guards/roles.guard";
import { UpdateProfileDto, UserDto, UserViewDto } from "../user/dto/user.dto";
import { UserService } from "../user/user.service";

@UseGuards(JwtAuthGuard, RolesGuard)
@Controller("profile")
export class ProfileController {
  constructor(private readonly service: UserService) {}

  @Get()
  async getProfile(
    @CurrentUser() user: CurrentUserType
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

  @Patch(":id")
  async updateProfile(
    @Param("id") id: string,
    @Body() data: UpdateProfileDto
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
      "Perfíl atualizado com sucesso."
    );
  }
}
