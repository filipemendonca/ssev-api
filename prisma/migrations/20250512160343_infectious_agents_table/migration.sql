-- AlterTable
ALTER TABLE "Solicitation" ADD COLUMN     "infectiousAgents" TEXT;

-- CreateTable
CREATE TABLE "InfectiousAgents" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "InfectiousAgents_pkey" PRIMARY KEY ("id")
);
