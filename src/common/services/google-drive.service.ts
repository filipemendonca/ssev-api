import { Injectable } from "@nestjs/common";
import { drive_v3, google } from "googleapis";
import { Readable } from "node:stream";
import { GoogleOAuthService } from "./google-oauth.service";

@Injectable()
export class GoogleDriveService {
  private readonly drive: drive_v3.Drive;

  constructor(private readonly googleOAuth: GoogleOAuthService) {
    const authClient = this.googleOAuth.getClient(
      process.env.GOOGLE_REFRESH_TOKEN
    );

    this.drive = google.drive({
      version: "v3",
      auth: authClient,
    });
  }

  async uploadDocx(buffer: Buffer, fileName: string, folderId?: string) {
    const stream = new Readable();
    stream.push(buffer);
    stream.push(null);

    const response = await this.drive.files.create({
      requestBody: {
        name: fileName,
        parents: folderId ? [folderId] : undefined,
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      },
      media: {
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        body: stream,
      },
      fields: "id, webViewLink",
    });

    return response.data;
  }
}
