/*
  Warnings:

  - You are about to drop the column `species` on the `Solicitation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Solicitation" DROP COLUMN "species",
ADD COLUMN     "specie" TEXT;
