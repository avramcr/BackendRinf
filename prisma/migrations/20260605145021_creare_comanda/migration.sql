-- CreateEnum
CREATE TYPE "statusComanda" AS ENUM ('CREATA', 'APROBARE_MANAGER', 'APROBARE_IT', 'APROBARE_FINANCIAR', 'FACTURATA', 'FINALIZATA', 'RESPINSA');

-- CreateTable
CREATE TABLE "comandaCreare" (
    "id" SERIAL NOT NULL,
    "titlu" TEXT NOT NULL,
    "descriere" TEXT,
    "categorie" TEXT NOT NULL,
    "suma" DOUBLE PRECISION NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'CREATA',
    "dataCrearii" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "comandaCreare_pkey" PRIMARY KEY ("id")
);
