import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Logger,
  Post,
  Query,
  Res,
} from "@nestjs/common";
import { Response } from "express";
import { DropboxOAuthService } from "../../common/services/dropbox-oauth.service";

@Controller("auth/dropbox")
export class DropboxOAuthController {
  private readonly logger = new Logger(DropboxOAuthController.name);
  constructor(private readonly dropboxOAuth: DropboxOAuthService) {}

  @Get()
  async auth(@Res() res: Response) {
    const url = await this.dropboxOAuth.getAuthUrl();
    return res.redirect(url.toString());
  }

  @Get("url")
  async getUrl() {
    const url = await this.dropboxOAuth.getAuthUrl();
    return { url };
  }

  @Get("callback")
  async callback(@Query("code") code: string, @Res() res: Response) {
    if (!code) {
      throw new BadRequestException("Código OAuth do Dropbox não informado.");
    }

    const tokens = await this.dropboxOAuth.getTokens(code);

    this.logger.log("DROPBOX REFRESH TOKEN 👇👇👇");
    this.logger.log(tokens.refresh_token);

    return res.send("OAuth Dropbox OK - veja o console");
  }

  @Post("upload-solicitation")
  async uploadSolicitation(
    @Body()
    body: {
      solicitationId: string;
      fileBase64: string;
      fileName?: string;
      folderPath?: string;
    },
  ) {
    if (!body?.solicitationId) {
      throw new BadRequestException("solicitationId é obrigatório.");
    }

    if (!body?.fileBase64) {
      throw new BadRequestException("fileBase64 é obrigatório.");
    }

    const base64Content = body.fileBase64.includes(",")
      ? body.fileBase64.split(",")[1]
      : body.fileBase64;
    const buffer = Buffer.from(base64Content, "base64");

    if (!buffer.length) {
      throw new BadRequestException("fileBase64 inválido.");
    }

    const fileName = body.fileName || `${body.solicitationId}.pdf`;
    const folderPath = body.folderPath || "/solicitacoes";

    const file = await this.dropboxOAuth.uploadSolicitation(
      buffer,
      fileName,
      folderPath,
    );

    if (!file) {
      return {
        message:
          "Upload para o Dropbox falhou (verifique o token). A solicitação foi processada.",
        file: null,
      };
    }

    return {
      message: "Solicitação salva no Dropbox com sucesso.",
      file,
    };
  }
}
