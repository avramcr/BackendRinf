/*
  Warnings:

  - You are about to drop the column `comentariuRespingere` on the `Utilizator` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Comanda" ADD COLUMN     "comentariuRespingere" TEXT;

-- AlterTable
ALTER TABLE "Utilizator" DROP COLUMN "comentariuRespingere";
