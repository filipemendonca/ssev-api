/*
  Warnings:

  - The `bloodCollectionTubeColor` column on the `Solicitation` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "Solicitation" DROP COLUMN "bloodCollectionTubeColor",
ADD COLUMN     "bloodCollectionTubeColor" TEXT[];
