-- CreateEnum
CREATE TYPE "SolicitationResult" AS ENUM ('POSITIVO', 'NEGATIVO', 'INDETERMINADO');

-- CreateEnum
CREATE TYPE "SolicitationSampleQuality" AS ENUM ('SATISFATORIA', 'INSATISFATORIA');

-- AlterTable
ALTER TABLE "Solicitation" ADD COLUMN     "solicitationClinicAvaliation" TEXT,
ADD COLUMN     "solicitationColectTypeConclusion" TEXT,
ADD COLUMN     "solicitationConclusionText" TEXT,
ADD COLUMN     "solicitationResult" "SolicitationResult",
ADD COLUMN     "solicitationSampleConclusion" TEXT,
ADD COLUMN     "solicitationSampleQuality" "SolicitationSampleQuality";
