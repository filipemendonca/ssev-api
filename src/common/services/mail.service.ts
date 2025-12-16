import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";

@Injectable()
export class MailService {
  private readonly transporter: nodemailer.Transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
  }

  async sendMailWithAttachment(options: {
    to: string;
    subject: string;
    text?: string;
    html?: string;
    attachment: {
      filename: string;
      content: Buffer;
      contentType?: string;
    };
  }) {
    return this.transporter.sendMail({
      from: `"Sistema" <${process.env.SMTP_USER}>`,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
      attachments: [
        {
          filename: options.attachment.filename,
          content: options.attachment.content,
          contentType: options.attachment.contentType,
        },
      ],
    });
  }
}
