export class SampleDto {
  id: string;
  name: string;
}

export type SampleFilterDto = Omit<SampleDto, "id">;
