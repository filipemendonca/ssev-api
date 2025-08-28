import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";

@Injectable()
export class AuthStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey:
        process.env.JWT_SECRET || "JWT_AUTH_SECRET_KEY_FOR_DEVELOPMENT_ONLY",
    });
  }

  async validate(payload: any) {
    return {
      id: payload.sub,
      email: payload.email,
      isActive: payload.isActive,
      role: payload.role,
    };
  }
}
