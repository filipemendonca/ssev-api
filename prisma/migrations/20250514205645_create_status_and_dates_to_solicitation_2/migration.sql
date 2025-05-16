/*
  Warnings:

  - You are about to drop the column `cancelDate` on the `Solicitation` table. All the data in the column will be lost.
  - You are about to drop the column `finishDate` on the `Solicitation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Solicitation" DROP COLUMN "cancelDate",
DROP COLUMN "finishDate",
ADD COLUMN     "canceledAt" TIMESTAMP(3),
ADD COLUMN     "finishedAt" TIMESTAMP(3);
