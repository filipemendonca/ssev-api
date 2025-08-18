/*
  Warnings:

  - You are about to drop the column `examsId` on the `Solicitation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Solicitation" DROP CONSTRAINT "Solicitation_examsId_fkey";

-- AlterTable
ALTER TABLE "Solicitation" DROP COLUMN "examsId",
ADD COLUMN     "exams" TEXT[];
