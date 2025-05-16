/*
  Warnings:

  - You are about to drop the column `ExamsId` on the `Solicitation` table. All the data in the column will be lost.
  - The `infectiousAgents` column on the `Solicitation` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "Solicitation" DROP CONSTRAINT "Solicitation_ExamsId_fkey";

-- AlterTable
ALTER TABLE "Solicitation" DROP COLUMN "ExamsId",
ADD COLUMN     "examsId" TEXT,
DROP COLUMN "infectiousAgents",
ADD COLUMN     "infectiousAgents" JSONB;

-- AddForeignKey
ALTER TABLE "Solicitation" ADD CONSTRAINT "Solicitation_examsId_fkey" FOREIGN KEY ("examsId") REFERENCES "Exams"("id") ON DELETE SET NULL ON UPDATE CASCADE;
