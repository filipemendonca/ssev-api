import { Injectable } from "@nestjs/common";
import PizZip from "pizzip";
import Docxtemplater from "docxtemplater";
import { replaceVariablesInDocx } from "../utils/docx-template";
import { SolicitationDto } from "../../modules/solicitation/dto/solicitation.dto";

@Injectable()
export class DocxService {
  // async generateDocument(
  //   variables: Record<string, string>,
  //   templateName: string,
  //   solicitation: SolicitationDto
  // ): Promise<Buffer> {
  //   let recordSolicitationXVariables: Record<string, string> = {};
  //   const variableIntoObject = Object.entries(variables);

  //   variableIntoObject.forEach(([key, value]) => {
  //     const val = solicitation[key as keyof SolicitationDto];
  //     recordSolicitationXVariables[value] = Array.isArray(val)
  //       ? val.join(", ")
  //       : val instanceof Date
  //         ? val.toISOString()
  //         : String(val ?? "");
  //   });

  //   const buffer = await replaceVariablesInDocx(
  //     `template/${templateName}`,
  //     recordSolicitationXVariables
  //   );

  //   // // opcional: salvar em disco
  //   // writeFileSync("./output/doc-gerado.docx", buffer);

  //   return buffer;
  // }

  async generateDocument(
    variables: Record<string, string>,
    templateBuffer: Buffer | Uint8Array,
    solicitation: SolicitationDto
  ): Promise<Buffer> {
    const data: Record<string, string> = {};

    for (const [key, variableName] of Object.entries(variables)) {
      const val = solicitation[key as keyof SolicitationDto];

      data[variableName] = Array.isArray(val)
        ? val.join(", ")
        : val instanceof Date
          ? val.toLocaleDateString("pt-BR")
          : String(val ?? "");
    }

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
      delimiters: { start: "##", end: "##" },
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
}
