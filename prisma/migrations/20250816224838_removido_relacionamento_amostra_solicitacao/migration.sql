/*
  Warnings:

  - You are about to drop the column `sampleId` on the `Solicitation` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Solicitation" DROP CONSTRAINT "Solicitation_sampleId_fkey";

-- AlterTable
ALTER TABLE "Solicitation" DROP COLUMN "sampleId",
ADD COLUMN     "samples" TEXT[];
