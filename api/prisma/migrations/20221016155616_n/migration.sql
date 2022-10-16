/*
  Warnings:

  - You are about to drop the column `currency` on the `Currencies` table. All the data in the column will be lost.
  - Added the required column `character` to the `Currencies` table without a default value. This is not possible if the table is not empty.
  - Added the required column `code` to the `Currencies` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Currencies" DROP COLUMN "currency",
ADD COLUMN     "character" VARCHAR(3) NOT NULL,
ADD COLUMN     "code" VARCHAR(3) NOT NULL;
