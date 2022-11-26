/*
  Warnings:

  - You are about to drop the column `endTimezoneOffset` on the `MasterSchedules` table. All the data in the column will be lost.
  - You are about to drop the column `startTimezoneOffset` on the `MasterSchedules` table. All the data in the column will be lost.
  - You are about to drop the `MasterProfilesToMasterSchedule` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[masterId]` on the table `MasterSchedules` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `masterId` to the `MasterSchedules` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timezoneOffset` to the `MasterSchedules` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "MasterProfilesToMasterSchedule" DROP CONSTRAINT "MasterProfilesToMasterSchedule_masterId_fkey";

-- DropForeignKey
ALTER TABLE "MasterProfilesToMasterSchedule" DROP CONSTRAINT "MasterProfilesToMasterSchedule_scheduleId_fkey";

-- AlterTable
ALTER TABLE "MasterSchedules" DROP COLUMN "endTimezoneOffset",
DROP COLUMN "startTimezoneOffset",
ADD COLUMN     "masterId" VARCHAR(36) NOT NULL,
ADD COLUMN     "timezoneOffset" INTEGER NOT NULL;

-- DropTable
DROP TABLE "MasterProfilesToMasterSchedule";

-- CreateIndex
CREATE UNIQUE INDEX "MasterSchedules_masterId_key" ON "MasterSchedules"("masterId");

-- AddForeignKey
ALTER TABLE "MasterSchedules" ADD CONSTRAINT "MasterSchedules_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "MasterProfiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
