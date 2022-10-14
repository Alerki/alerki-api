/*
  Warnings:

  - Changed the type of `duration` on the `MasterServices` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "MasterServices" DROP COLUMN "duration",
ADD COLUMN     "duration" TIME(0) NOT NULL;
