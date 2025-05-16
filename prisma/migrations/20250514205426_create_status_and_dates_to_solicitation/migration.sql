-- CreateEnum
CREATE TYPE "SolicitationStatus" AS ENUM ('CRIADO', 'FILTRAGEM', 'EM_TRANSPORTE', 'EM_ANALISE', 'BLOQUEADO', 'FINALIZADO', 'CANCELADO');

-- AlterTable
ALTER TABLE "Solicitation" ADD COLUMN     "cancelDate" TIMESTAMP(3),
ADD COLUMN     "finishDate" TIMESTAMP(3),
ADD COLUMN     "status" "SolicitationStatus" DEFAULT 'CRIADO';
