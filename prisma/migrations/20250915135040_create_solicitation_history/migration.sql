-- CreateTable
CREATE TABLE "SolicitationHistory" (
    "id" TEXT NOT NULL,
    "solicitationId" TEXT NOT NULL,
    "previousStatus" "SolicitationStatus",
    "newStatus" "SolicitationStatus" NOT NULL,
    "blockedCause" TEXT,
    "changedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "changedById" TEXT NOT NULL,

    CONSTRAINT "SolicitationHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "SolicitationHistory" ADD CONSTRAINT "SolicitationHistory_changedById_fkey" FOREIGN KEY ("changedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SolicitationHistory" ADD CONSTRAINT "SolicitationHistory_solicitationId_fkey" FOREIGN KEY ("solicitationId") REFERENCES "Solicitation"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
