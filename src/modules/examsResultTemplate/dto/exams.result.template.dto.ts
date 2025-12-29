export class ExamsResultTemplateDto {
  name: string;
  fileName: string;
  mimeType: string;
  fileData: Buffer | Uint8Array | null;
}

export type ExamsResultTemplateFilterDto = Omit<ExamsResultTemplateDto, "id">;
