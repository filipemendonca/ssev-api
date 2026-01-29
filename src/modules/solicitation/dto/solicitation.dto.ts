import {
  ExamResultType,
  SolicitationResult,
  SolicitationSampleQuality,
  SolicitationStatus,
} from "@prisma/client";

interface DateRange {
  range: {
    from: Date;
    to: Date;
  };
}

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
  bloodCollectionTubeColor: string[];
  infectiousAgents: string[];
  samples: string[];
  examResultType: ExamResultType;
  exams: string[];
  canceledCause: string;
  blockedCause: string;
  status: SolicitationStatus;
  finishedAt: Date;
  canceledAt: Date;
  createdAt: Date;
  updatedAt: Date;
  blockedAt: Date;
  solicitationResult?: SolicitationResult;
  solicitationConclusionText: string;
  solicitationSampleConclusion: string;
  solicitationColectTypeConclusion: string;
  solicitationSampleQuality?: SolicitationSampleQuality;
  solicitationClinicAvaliation: string;
  isDeleted: boolean;
}

export type SolicitationFilterDto = {
  tutor: string;
  patient: string;
  status: SolicitationStatus;
  rangeDate: DateRange;
};
