import { SolicitationStatus } from "../../../../prisma/generated";

interface ChangedBy {
  name: string;
}
export class SolicitationHistoryDto {
  id: string;
  solicitationId: string;
  previousStatus?: SolicitationStatus;
  newStatus: SolicitationStatus;
  blockedCause?: string;
  changedAt: Date;
  changedById: string;
  changedBy?: ChangedBy;
}
