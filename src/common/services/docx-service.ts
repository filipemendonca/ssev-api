import { Injectable, InternalServerErrorException } from "@nestjs/common";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import { SolicitationDto } from "../../modules/solicitation/dto/solicitation.dto";
import { exec } from "node:child_process";
import * as fs from "node:fs/promises";
import * as path from "node:path";
import * as tmp from "tmp";

@Injectable()
export class DocxService {
  private readonly CONVERT_TIMEOUT = 30_000; // 30s

  async mapSolicitationVariables(
    solicitation: SolicitationDto,
    variables: Record<string, string>,
  ): Promise<Record<string, string>> {
    const data: Record<string, string> = {};

    for (const [key, variableName] of Object.entries(variables)) {
      const val = solicitation[key as keyof SolicitationDto];

      let formattedValue: string;
      if (Array.isArray(val)) {
        formattedValue = val.join(", ");
      } else if (val instanceof Date) {
        formattedValue = val.toLocaleDateString("pt-BR");
      } else {
        formattedValue = String(val ?? "");
      }

      data[variableName] = formattedValue;
    }

    return data;
  }

  async generateDocument(
    data: Record<string, string>,
    templateBuffer: Buffer | Uint8Array,
    solicitation: SolicitationDto,
  ): Promise<Buffer> {
    // const data: Record<string, string> = {};

    // for (const [key, variableName] of Object.entries(variables)) {
    //   const val = solicitation[key as keyof SolicitationDto];

    //   data[variableName] = Array.isArray(val)
    //     ? val.join(", ")
    //     : val instanceof Date
    //       ? val.toLocaleDateString("pt-BR")
    //       : String(val ?? "");
    // }

    // const data = await this.mapSolicitationVariables(solicitation, variables);

    let zip: PizZip;

    try {
      // 🚨 ESSENCIAL — Prisma Bytes → Buffer
      const safeBuffer = Buffer.isBuffer(templateBuffer)
        ? templateBuffer
        : Buffer.from(templateBuffer);

      zip = new PizZip(safeBuffer);
    } catch (error) {
      console.error("Erro ao abrir ZIP do DOCX:", error);
      throw new Error("Template DOCX inválido");
    }

    const doc = new Docxtemplater(zip, {
      paragraphLoop: true,
      linebreaks: true,
      delimiters: { start: "#", end: "#" },
      nullGetter(part) {
        console.warn(`Variável não encontrada: ${part.value}`);
        return "";
      },
    });

    try {
      doc.render(data);
    } catch (error) {
      console.error("Erro ao renderizar DOCX:", error);
      throw new Error("Erro ao substituir variáveis no template");
    }

    return doc.getZip().generate({
      type: "nodebuffer",
      compression: "DEFLATE",
    });
  }

  async convertDocxToPdf(docxBuffer: Buffer): Promise<Buffer> {
    const tmpDir = tmp.dirSync({ unsafeCleanup: true });

    try {
      const inputPath = path.join(tmpDir.name, "laudo.docx");
      const outputPath = path.join(tmpDir.name, "laudo.pdf");

      await fs.writeFile(inputPath, docxBuffer);

      if (process.env.NODE_ENV === "production") {
        await this.runWithTimeout(
          `soffice --headless --nologo --nofirststartwizard --convert-to pdf --outdir ${tmpDir.name} ${inputPath}`,
        );
      } else {
        const LIBRE = "/Applications/LibreOffice.app/Contents/MacOS/soffice";
        await this.runWithTimeout(
          `${LIBRE} --headless --nologo --nofirststartwizard --convert-to pdf --outdir ${tmpDir.name} ${inputPath}`,
        );
      }

      return await fs.readFile(outputPath);
    } catch (error) {
      console.error("❌ Erro ao converter DOCX para PDF:", error);

      throw new InternalServerErrorException("Falha ao gerar o PDF do laudo");
    } finally {
      tmpDir.removeCallback();
    }
  }

  private async runWithTimeout(command: string): Promise<void> {
    return new Promise((resolve, reject) => {
      const process = exec(
        command,
        { timeout: this.CONVERT_TIMEOUT },
        (error) => {
          if (error) {
            if ((error as any).killed) {
              return reject(new Error("Timeout ao converter documento"));
            }
            return reject(error);
          }

          resolve();
        },
      );

      process.stdout?.on("data", (data) =>
        console.log("📄 LibreOffice:", data.toString()),
      );
      process.stderr?.on("data", (data) =>
        console.error("⚠️ LibreOffice:", data.toString()),
      );
    });
  }
}
