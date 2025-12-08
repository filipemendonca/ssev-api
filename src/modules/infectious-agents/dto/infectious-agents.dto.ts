export class InfectiousAgentsDto {
  id: string;
  name: string;
}

export type InfectiousAgentsFilterDto = Omit<InfectiousAgentsDto, "id">;
