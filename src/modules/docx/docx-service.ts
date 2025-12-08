import { Injectable } from "@nestjs/common";
import { writeFileSync } from "node:fs";
import { replaceVariablesInDocx } from "../../common/utils/docx-template";
import { SolicitationDto } from "../solicitation/dto/solicitation.dto";

@Injectable()
export class DocxService {
  async generateDocument(
    variables: Record<string, string>,
    templateName: string,
    solicitation: SolicitationDto
  ): Promise<Buffer> {
    let recordSolicitationXVariables: Record<string, string> = {};
    const variableIntoObject = Object.entries(variables);

    variableIntoObject.forEach(([key, value]) => {
      const val = solicitation[key as keyof SolicitationDto];
      recordSolicitationXVariables[value] = Array.isArray(val)
        ? val.join(", ")
        : val instanceof Date
          ? val.toISOString()
          : String(val ?? "");
    });

    const buffer = await replaceVariablesInDocx(
      `template/${templateName}`,
      recordSolicitationXVariables
    );

    // // opcional: salvar em disco
    // writeFileSync("./output/doc-gerado.docx", buffer);

    return buffer;
  }
}
