-- CreateTable
CREATE TABLE "Solicitation" (
    "id" TEXT NOT NULL,
    "tutor" TEXT,
    "patient" TEXT,
    "gender" TEXT,
    "age" INTEGER,
    "doctor" TEXT,
    "species" TEXT,
    "hospitalVet" TEXT,
    "bloodCollectionTubeId" TEXT,
    "sampleId" TEXT,
    "ExamsId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Solicitation_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Solicitation" ADD CONSTRAINT "Solicitation_ExamsId_fkey" FOREIGN KEY ("ExamsId") REFERENCES "Exams"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solicitation" ADD CONSTRAINT "Solicitation_sampleId_fkey" FOREIGN KEY ("sampleId") REFERENCES "Sample"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Solicitation" ADD CONSTRAINT "Solicitation_bloodCollectionTubeId_fkey" FOREIGN KEY ("bloodCollectionTubeId") REFERENCES "BloodCollectionTube"("id") ON DELETE SET NULL ON UPDATE CASCADE;
