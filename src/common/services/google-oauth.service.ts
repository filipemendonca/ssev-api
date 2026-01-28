import { Injectable } from "@nestjs/common";
import { OAuth2Client } from "google-auth-library";
import { google } from "googleapis";

@Injectable()
export class GoogleOAuthService {
  private readonly oauth2Client: OAuth2Client;

  constructor() {
    this.oauth2Client = new google.auth.OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      process.env.GOOGLE_OAUTH_REDIRECT_URL ||
        "http://localhost:4000/auth/google/callback",
    );
  }

  getAuthUrl() {
    return this.oauth2Client.generateAuthUrl({
      access_type: "offline", // CRÍTICO
      prompt: "consent", // CRÍTICO (gera refresh_token)
      scope: ["https://www.googleapis.com/auth/drive.file"],
    });
  }

  async getTokens(code: string) {
    const { tokens } = await this.oauth2Client.getToken(code);
    return tokens;
  }

  getClient(refreshToken: string) {
    this.oauth2Client.setCredentials({
      refresh_token: refreshToken,
    });

    return this.oauth2Client;
  }
}
