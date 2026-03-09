import { Injectable } from "@nestjs/common";
import { Dropbox, DropboxAuth } from "dropbox";

@Injectable()
export class DropboxOAuthService {
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
  ) {
    const safeFolderPath = this.normalizeFolderPath(folderPath);
    const safeFileName = this.normalizeFileName(fileName);
    const filePath = `${safeFolderPath}/${safeFileName}`;

    const client = this.getClient(refreshToken);
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
  }

  private getClient(refreshToken: string) {
    const auth = this.buildAuthClient(refreshToken);
    auth.checkAndRefreshAccessToken();

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
