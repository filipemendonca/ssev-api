export class ExamsResultTemplateDto {
  id: string;
  name: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ExamsResultTemplateFilterDto = Omit<ExamsResultTemplateDto, "id">;
