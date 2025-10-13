export class ExamsResultTemplateDto {
  name: string;
  fileName: string;
  filePath: string;
}

export type ExamsResultTemplateFilterDto = Omit<ExamsResultTemplateDto, "id">;
