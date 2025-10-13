export class ExamsResultTemplateDto {
  name: string;
}

export type ExamsResultTemplateFilterDto = Omit<ExamsResultTemplateDto, "id">;
