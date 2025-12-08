import { loadAsync } from "jszip";
import { readFileSync } from "node:fs";

export async function replaceVariablesInDocx(
  templatePath: string,
  variables: Record<string, string>
): Promise<Buffer> {
  const content = readFileSync(templatePath);
  const zip = await loadAsync(content);

  // O documento principal do Word fica em /word/document.xml
  const documentXml = await zip.file("word/document.xml").async("string");

  // Faz substituição simples de texto
  let newXml = documentXml;

  for (const key in variables) {
    const value = variables[key];
    const regex = new RegExp(`${key}`, "g");
    newXml = newXml.replace(regex, value);
  }

  // Atualiza o ZIP
  zip.file("word/document.xml", newXml);

  // Gera o buffer do novo docx
  return await zip.generateAsync({ type: "nodebuffer" });
}
