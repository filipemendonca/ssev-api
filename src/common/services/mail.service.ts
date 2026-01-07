import { Injectable } from "@nestjs/common";
import * as nodemailer from "nodemailer";
import { Resend } from "resend";

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
    if (process.env.NODE_ENV === "production") {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: `"Sistema" <${process.env.RESEND_FROM_EMAIL}>`,
        to: options.to,
        subject: options.subject,
        html: options.html,
        attachments: [
          {
            filename: options.attachment.filename,
            content: options.attachment.content,
            contentType: options.attachment.contentType,
          },
        ],
      });
    } else {
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

  async sendMail(options: {
    to: string;
    subject: string;
    text?: string;
    html?: string;
  }) {
    if (process.env.NODE_ENV === "production") {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: `"Sistema" <${process.env.RESEND_FROM_EMAIL}>`,
        to: options.to,
        subject: options.subject,
        html: options.html,
      });
    } else {
      return this.transporter.sendMail({
        from: `"Sistema" <${process.env.SMTP_USER}>`,
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
      });
    }
  }
}
