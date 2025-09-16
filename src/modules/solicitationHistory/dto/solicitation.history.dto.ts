import { SolicitationStatus } from "@prisma/client";

export class SolicitationHistoryDto {
  id: string;
  solicitationId: string;
  previousStatus?: SolicitationStatus;
  newStatus: SolicitationStatus;
  blockedCause?: string;
  changedAt: Date;
  changedById: string;
}
