import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  UseGuards,
} from "@nestjs/common";
import { JwtAuthGuard } from "../auth/guards/auth.guard";
import { UserService } from "./user.service";
import { UserDto } from "./dto/user.dto";

@UseGuards(JwtAuthGuard)
@Controller("users")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<UserDto[]> {
    return await this.userService.findAll();
  }

  @Get(":id")
  async findOne(@Param("id") id: string): Promise<UserDto | null> {
    return this.userService.findOne(id);
  }

  @Post()
  async create(@Body() data: UserDto): Promise<UserDto> {
    return this.userService.create(data);
  }

  @Put(":id")
  async update(
    @Param("id") id: string,
    @Body() data: UserDto
  ): Promise<UserDto> {
    return this.userService.update(id, data);
  }

  @Delete(":id")
  async delete(@Param("id") id: string) {
    return this.userService.delete(id);
  }
}
