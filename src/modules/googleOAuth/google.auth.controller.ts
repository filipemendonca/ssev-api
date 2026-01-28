import { Controller, Get, Logger, Query, Res } from "@nestjs/common";
import { Response } from "express";
import { GoogleOAuthService } from "../../common/services/google-oauth.service";

@Controller("auth/google")
export class GoogleAuthController {
  private readonly logger = new Logger(GoogleAuthController.name);
  constructor(private readonly googleOAuth: GoogleOAuthService) {}

  @Get()
  auth(@Res() res: Response) {
    const url = this.googleOAuth.getAuthUrl();
    return res.redirect(url);
  }

  @Get("google")
  getUrl() {
    const url = this.googleOAuth.getAuthUrl();
    return { url };
  }

  @Get("callback")
  async callback(@Query("code") code: string, @Res() res: Response) {
    const tokens = await this.googleOAuth.getTokens(code);

    this.logger.log("REFRESH TOKEN 👇👇👇");
    this.logger.log(tokens.refresh_token);

    return res.send("OAuth OK – veja o console");
  }
}
