/*
  Warnings:

  - You are about to drop the column `roleId` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Roles` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMINISTRADOR', 'VETERINARIO', 'PATOLOGISTA');

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_roleId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "roleId",
ADD COLUMN     "role" "Role" DEFAULT 'VETERINARIO';

-- DropTable
DROP TABLE "Roles";
