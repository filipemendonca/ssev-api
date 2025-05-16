/*
  Warnings:

  - You are about to drop the `BloodCollectionTube` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "BloodCollectionTubeColor" AS ENUM ('TAMPA_ROXA', 'TAMPA_VERMELHA', 'TAMPA_CINZA', 'TAMPA_AZUL');

-- DropForeignKey
ALTER TABLE "Solicitation" DROP CONSTRAINT "Solicitation_bloodCollectionTubeId_fkey";

-- AlterTable
ALTER TABLE "Solicitation" ADD COLUMN     "bloodCollectionTubeColor" "BloodCollectionTubeColor" DEFAULT 'TAMPA_ROXA';

-- DropTable
DROP TABLE "BloodCollectionTube";
