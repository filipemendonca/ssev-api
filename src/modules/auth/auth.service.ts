import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { compare, hash } from "bcrypt";
import { UserService } from "../user/user.service";
import { UserDto } from "../user/dto/user.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string) {
    const user = await this.usersService.findBy(username);
    if (user && (await compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException("Invalid credentials");
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(data: UserDto) {
    const hashedPassword = await hash(data.password, 10);
    const user = await this.usersService.create({
      ...data,
      password: hashedPassword,
    });
    return this.login(user);
  }
}
