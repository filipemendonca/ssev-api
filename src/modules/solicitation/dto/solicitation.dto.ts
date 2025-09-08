import { BloodCollectionTubeColor, SolicitationStatus } from "@prisma/client";

export class SolicitationDto {
  id: string;
  userId: string;
  tutor: string;
  patient: string;
  gender: string;
  age: string;
  doctor: string;
  specie: string;
  hospitalVet: string;
  bloodCollectionTubeColor: BloodCollectionTubeColor;
  infectiousAgents: string[];
  samples: string[];
  exams: string[];
  canceledCause: string;
  blockedCause: string;
  status: SolicitationStatus;
  finishedAt: Date;
  canceledAt: Date;
  createdAt: Date;
  updatedAt: Date;
  blockedAt: Date;
}
