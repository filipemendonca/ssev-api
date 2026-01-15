import { createHash, randomBytes } from "node:crypto";

export function generateResetToken() {
  const token = randomBytes(32).toString("hex");

  const tokenHash = createHash("sha256").update(token).digest("hex");

  return { token, tokenHash };
}

export function sha256(value: string) {
  return createHash("sha256").update(value).digest("hex");
}

export function resetPasswordEmailTemplate(params: {
  name?: string;
  resetLink: string;
}) {
  const { name, resetLink } = params;

  return `
  <!DOCTYPE html>
  <html lang="pt-BR">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Redefinição de senha</title>
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
                    SSEV - Sistema de Solicitação de Exames Veterinários
                  </h1>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding:32px; color:#0f172a;">
                  <p style="font-size:16px; margin:0 0 16px 0;">
                    Olá${name ? `, <strong>${name}</strong>` : ""} 👋
                  </p>

                  <p style="font-size:15px; line-height:1.6; margin:0 0 16px 0;">
                    Recebemos uma solicitação para redefinir a senha da sua conta.
                    Para continuar, clique no botão abaixo:
                  </p>

                  <div style="text-align:center; margin:32px 0;">
                    <a href="${resetLink}"
                       style="background:#2563eb; color:#ffffff; text-decoration:none; padding:14px 28px; border-radius:6px; font-size:16px; display:inline-block;">
                      Redefinir senha
                    </a>
                  </div>

                  <p style="font-size:14px; line-height:1.6; color:#475569; margin:0 0 12px 0;">
                    Este link é válido por <strong>30 minutos</strong>.
                  </p>

                  <p style="font-size:14px; line-height:1.6; color:#475569; margin:0 0 12px 0;">
                    Se você não solicitou a redefinição de senha, pode ignorar este e-mail com segurança.
                  </p>

                  <hr style="border:none; border-top:1px solid #e5e7eb; margin:24px 0;"/>

                  <p style="font-size:12px; color:#64748b; line-height:1.5; margin:0;">
                    Se o botão não funcionar, copie e cole este link no navegador:<br/>
                    <span style="word-break:break-all; color:#2563eb;">
                      ${resetLink}
                    </span>
                  </p>
                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="background:#f1f5f9; padding:16px; text-align:center;">
                  <p style="margin:0; font-size:12px; color:#64748b;">
                    © ${new Date().getFullYear()} SSEV. Todos os direitos reservados.
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
