import { BloodCollectionTubeColor, SolicitationStatus } from "@prisma/client";

export class SolicitationDto {
  id: string;
  tutor: string;
  patient: string;
  gender: string;
  age: number;
  doctor: string;
  species: string;
  hospitalVet: string;
  bloodCollectionTubeColor: BloodCollectionTubeColor;
  infectiousAgents: string[];
  sampleId: string;
  examsId: string;
  status: SolicitationStatus;
  finishedAt: Date;
  canceledAt: Date;
  createdAt: Date;
  updatedAt: Date;
}
