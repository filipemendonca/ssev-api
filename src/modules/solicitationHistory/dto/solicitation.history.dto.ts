import { SolicitationStatus } from "@prisma/client";

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
