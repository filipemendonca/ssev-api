/*
  Warnings:

  - You are about to drop the column `FieldRelated` on the `Variables` table. All the data in the column will be lost.
  - You are about to drop the column `TableRelated` on the `Variables` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Variables" DROP COLUMN "FieldRelated",
DROP COLUMN "TableRelated",
ADD COLUMN     "fieldRelated" TEXT,
ADD COLUMN     "tableRelated" TEXT;
