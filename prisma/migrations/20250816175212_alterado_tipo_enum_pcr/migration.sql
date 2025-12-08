/*
  Warnings:

  - The values [QUALITATIVO,QUANTITATIVO] on the enum `ExamResultType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ExamResultType_new" AS ENUM ('PCR_QUALITATIVO', 'PCR_QUANTITATIVO');
ALTER TABLE "Solicitation" ALTER COLUMN "examResultType" DROP DEFAULT;
ALTER TABLE "Solicitation" ALTER COLUMN "examResultType" TYPE "ExamResultType_new" USING ("examResultType"::text::"ExamResultType_new");
ALTER TYPE "ExamResultType" RENAME TO "ExamResultType_old";
ALTER TYPE "ExamResultType_new" RENAME TO "ExamResultType";
DROP TYPE "ExamResultType_old";
ALTER TABLE "Solicitation" ALTER COLUMN "examResultType" SET DEFAULT 'PCR_QUALITATIVO';
COMMIT;

-- AlterTable
ALTER TABLE "Solicitation" ALTER COLUMN "examResultType" SET DEFAULT 'PCR_QUALITATIVO';
