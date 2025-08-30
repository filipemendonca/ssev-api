export class ExamsDto {
  id: string;
  name: string;
}

export type ExamsFilterDto = Omit<ExamsDto, "id">;
