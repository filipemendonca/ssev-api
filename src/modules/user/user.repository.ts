import { Injectable } from "@nestjs/common";
import { Prisma, User } from "@prisma/client";
import { BaseRepository } from "../../common/base.repository";
import { PrismaService } from "../../../prisma/prisma.service";

@Injectable()
export class UserRepository extends BaseRepository<Prisma.UserDelegate, User> {
  constructor(prisma: PrismaService) {
    super(prisma, (p) => p.user);
  }

  public async validateIfHasEmail(email: string): Promise<number> {
    return await this.prisma.user.count({ where: { email } });
  }
}
