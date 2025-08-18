-- CreateEnum
CREATE TYPE "ExamResultType" AS ENUM ('QUALITATIVO', 'QUANTITATIVO');

-- AlterTable
ALTER TABLE "Solicitation" ADD COLUMN     "blockedAt" TIMESTAMP(3),
ADD COLUMN     "blockedCause" TEXT,
ADD COLUMN     "canceledCause" TEXT,
ADD COLUMN     "examResultType" "ExamResultType" DEFAULT 'QUALITATIVO';
