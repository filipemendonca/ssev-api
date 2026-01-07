import { Injectable, UnprocessableEntityException } from "@nestjs/common";
import { hash } from "bcrypt";
import { PaginationQueryDto } from "../../common/dto/pagination-query.dto";
import { SuccessResponse } from "../../common/dto/response.dto";
import { UserDto, UserViewDto } from "./dto/user.dto";
import { UserRepository } from "./user.repository";

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  public async findAll(
    pagination: PaginationQueryDto,
    select?: any
  ): Promise<SuccessResponse<UserViewDto[]>> {
    const { items, total, hasNextPage, totalPages } =
      await this.userRepo.findAll(pagination, undefined, select);

    return new SuccessResponse(items, null, {
      total,
      limit: pagination.limit,
      currentPage: pagination.currentPage,
      totalPages,
      hasNextPage,
    });
  }

  public async findOne(id: string, select?: any): Promise<UserDto | null> {
    return await this.userRepo.findById(id, select);
  }

  public async findBy(email?: string): Promise<UserDto> {
    return await this.userRepo.findOne({
      where: {
        email: email,
      },
    });
  }

  public async create(data: UserDto): Promise<UserDto> {
    const hasEmail = await this.userRepo.validateIfHasEmail(data.email);

    if (hasEmail !== 0) {
      throw new UnprocessableEntityException("Este e-mail já está em uso.");
    }

    data.password = data.password
      ? await hash(data.password, 10)
      : await hash("123456", 10);

    return this.userRepo.create(data);
  }

  public async update(id: string, data: UserDto): Promise<UserDto> {
    return await this.userRepo.update(id, data);
  }

  public async delete(id: string) {
    return await this.userRepo.delete(id);
  }
}
