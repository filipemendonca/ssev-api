import { exec } from "node:child_process";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import tmp from "tmp";
import { promisify } from "node:util";

export function examReportEmailTemplate(params: {
  recipientName: string;
  patientName: string;
  tutorName: string;
  requestDate: string;
  systemName?: string;
}) {
  const {
    recipientName,
    patientName,
    tutorName,
    requestDate,
    systemName = "Sistema",
  } = params;

  return `
<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Envio de laudo</title>
  </head>
  <body style="margin:0; padding:0; background-color:#f4f6f8; font-family: Arial, Helvetica, sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f6f8; padding: 24px 0;">
      <tr>
        <td align="center">
          <table width="100%" cellpadding="0" cellspacing="0" style="max-width:600px; background:#ffffff; border-radius:8px; overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="background:#0f172a; padding:20px; text-align:center;">
                <h1 style="color:#ffffff; margin:0; font-size:22px;">
                  ${systemName}
                </h1>
              </td>
            </tr>

            <!-- Content -->
            <tr>
              <td style="padding:32px; color:#0f172a;">
                <p style="font-size:16px; margin:0 0 16px 0;">
                  Olá, <strong>${recipientName}</strong> 👋
                </p>

                <p style="font-size:15px; line-height:1.6; margin:0 0 16px 0;">
                  Segue em anexo o resultado do laudo.
                </p>

                <p style="font-size:15px; line-height:1.6; margin:0 0 20px 0;">
                  Estamos enviando em anexo o relatório referente à solicitação de exame realizada para os seguintes dados:
                </p>

                <!-- Info box -->
                <table width="100%" cellpadding="0" cellspacing="0" style="background:#f8fafc; border:1px solid #e5e7eb; border-radius:6px;">
                  <tr>
                    <td style="padding:16px;">
                      <p style="margin:0 0 8px 0; font-size:14px;">
                        🐾 <strong>Paciente:</strong> ${patientName}
                      </p>
                      <p style="margin:0 0 8px 0; font-size:14px;">
                        👤 <strong>Tutor:</strong> ${tutorName}
                      </p>
                      <p style="margin:0; font-size:14px;">
                        📅 <strong>Data da solicitação:</strong> ${requestDate}
                      </p>
                    </td>
                  </tr>
                </table>

                <p style="font-size:15px; margin:24px 0 0 0;">
                  Atenciosamente,<br/>
                  <strong>${systemName}</strong>
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="background:#f1f5f9; padding:16px; text-align:center;">
                <p style="margin:0; font-size:12px; color:#64748b;">
                  © ${new Date().getFullYear()} ${systemName}. Todos os direitos reservados.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;
}
