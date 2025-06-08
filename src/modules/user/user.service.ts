import { Injectable } from "@nestjs/common";
import { hash } from "bcrypt";
import { UserRepository } from "./user.repository";
import { UserDto } from "./dto/user.dto";
import { SuccessResponse } from "../../common/dto/response.dto";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  public async findAll(
    pagination: PaginationQueryDto
  ): Promise<SuccessResponse<UserDto[]>> {
    const { items, total } = await this.userRepo.findAll(pagination);

    return new SuccessResponse(items, null, {
      total,
      limit: pagination.limit,
      offset: pagination.offset,
      hasNextPage: pagination.offset + pagination.limit < total,
    });
  }

  public async findOne(id: string): Promise<UserDto | null> {
    return await this.userRepo.findById(id);
  }

  public async findBy(username?: string): Promise<UserDto> {
    return await this.userRepo.findOne({
      where: {
        username: username,
      },
    });
  }

  public async create(data: UserDto): Promise<UserDto> {
    data.password = await hash(data.password, 10);
    return this.userRepo.create(data);
  }

  public async update(id: string, data: UserDto): Promise<UserDto> {
    return await this.userRepo.update(id, data);
  }

  public async delete(id: string) {
    return await this.userRepo.delete(id);
  }
}
