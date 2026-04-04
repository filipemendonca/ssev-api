import { Injectable, Logger } from "@nestjs/common";
import { Dropbox, DropboxAuth } from "dropbox";

@Injectable()
export class DropboxOAuthService {
  private readonly logger = new Logger(DropboxOAuthService.name);
  private readonly appKey: string;
  private readonly appSecret: string;
  private readonly redirectUri: string;
  private readonly folderName: string;

  constructor() {
    this.appKey = process.env.DROPBOX_APP_KEY || "";
    this.appSecret = process.env.DROPBOX_APP_SECRET || "";
    this.redirectUri =
      process.env.DROPBOX_REDIRECT_URI ||
      "http://localhost:4000/auth/dropbox/callback";
    this.folderName = process.env.DROPBOX_FOLDER_NAME || "";
  }

  async getAuthUrl() {
    const auth = this.buildAuthClient();

    return auth.getAuthenticationUrl(
      this.redirectUri,
      undefined, // state
      "code", // responseType
      "offline", // tokenAccessType
      undefined, // codeChallengeMethod
      undefined, // codeVerifier
      false, // PKCE disabled for server-side OAuth flow
    );
  }

  async getTokens(code: string) {
    const auth = this.buildAuthClient();
    const response = await auth.getAccessTokenFromCode(this.redirectUri, code);
    const result = (response as any)?.result ?? response;

    return {
      access_token: result?.access_token,
      refresh_token: result?.refresh_token,
      expires_in: result?.expires_in,
      token_type: result?.token_type,
      scope: result?.scope,
      account_id: result?.account_id,
      uid: result?.uid,
    };
  }

  async uploadSolicitation(
    buffer: Buffer,
    fileName: string,
    folderPath = "/solicitacoes",
    refreshToken = process.env.DROPBOX_REFRESH_TOKEN || "",
  ): Promise<{ id: string; name: string; pathDisplay: string; pathLower: string; rev: string } | null> {
    try {
      const safeFolderPath = this.normalizeFolderPath(folderPath);
      const safeFileName = this.normalizeFileName(fileName);
      const filePath = `${safeFolderPath}/${safeFileName}`;

      const client = await this.getClient(refreshToken);
      const uploadResponse = await client.filesUpload({
        path: filePath,
        contents: buffer,
        mode: { ".tag": "overwrite" },
        autorename: false,
        mute: true,
      });

      return {
        id: uploadResponse.result.id,
        name: uploadResponse.result.name,
        pathDisplay: uploadResponse.result.path_display,
        pathLower: uploadResponse.result.path_lower,
        rev: uploadResponse.result.rev,
      };
    } catch (error: any) {
      const message =
        error?.error?.error_description ??
        error?.message ??
        "Erro ao enviar arquivo para o Dropbox.";
      this.logger.warn(
        `Dropbox upload failed (solicitação finalizada normalmente): ${message}`,
      );
      if (error?.error?.error === "invalid_grant") {
        this.logger.warn(
          "Token do Dropbox expirado ou revogado. Reautorize em /auth/dropbox.",
        );
      }
      return null;
    }
  }

  private async getClient(refreshToken: string) {
    const auth = this.buildAuthClient(refreshToken);
    await Promise.resolve(auth.checkAndRefreshAccessToken());
    return new Dropbox({ auth });
  }

  private buildAuthClient(refreshToken?: string) {
    return new DropboxAuth({
      clientId: this.appKey,
      clientSecret: this.appSecret,
      refreshToken: refreshToken || undefined,
    });
  }

  private normalizeFolderPath(folderPath: string) {
    const baseFolder = this.normalizeBaseFolderName(this.folderName);
    const fallback = "/solicitacoes";
    const requestedPath =
      !folderPath || folderPath.trim() === ""
        ? fallback
        : this.removeTrailingSlash(folderPath.trim());
    const normalizedRequested = requestedPath.startsWith("/")
      ? requestedPath
      : `/${requestedPath}`;

    return `${baseFolder}${normalizedRequested}`;
  }

  private normalizeFileName(fileName: string) {
    if (!fileName || fileName.trim() === "") {
      return `solicitacao_${Date.now()}.pdf`;
    }

    return fileName.trim().replaceAll(/[\\/:*?"<>|]/g, "_");
  }

  private normalizeBaseFolderName(folderName: string) {
    if (!folderName || folderName.trim() === "") {
      return "";
    }

    const trimmed = folderName.trim();
    const withLeadingSlash = trimmed.startsWith("/") ? trimmed : `/${trimmed}`;
    return this.removeTrailingSlash(withLeadingSlash);
  }

  private removeTrailingSlash(path: string) {
    return path.replaceAll(/\/+$/g, "");
  }
}
