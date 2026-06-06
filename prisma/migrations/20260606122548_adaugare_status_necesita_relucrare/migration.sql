/*
  Warnings:

  - The values [RESPINSA] on the enum `StatusComanda` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "StatusComanda_new" AS ENUM ('CREATA', 'APROBARE_MANAGER', 'APROBARE_IT', 'APROBARE_FINANCIAR', 'FACTURATA', 'FINALIZATA', 'NECESITA_RELUCRARE');
ALTER TABLE "public"."Comanda" ALTER COLUMN "status" DROP DEFAULT;
ALTER TABLE "Comanda" ALTER COLUMN "status" TYPE "StatusComanda_new" USING ("status"::text::"StatusComanda_new");
ALTER TYPE "StatusComanda" RENAME TO "StatusComanda_old";
ALTER TYPE "StatusComanda_new" RENAME TO "StatusComanda";
DROP TYPE "public"."StatusComanda_old";
ALTER TABLE "Comanda" ALTER COLUMN "status" SET DEFAULT 'CREATA';
COMMIT;
