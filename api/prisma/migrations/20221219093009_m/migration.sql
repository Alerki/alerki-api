/*
  Warnings:

  - The `startTime` column on the `MasterWeeklySchedules` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `endTime` column on the `MasterWeeklySchedules` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `masterServiceId` to the `Appointments` table without a default value. This is not possible if the table is not empty.
  - Added the required column `timezoneOffset` to the `Appointments` table without a default value. This is not possible if the table is not empty.
  - Changed the type of `startTime` on the `MasterSchedules` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `endTime` on the `MasterSchedules` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "Appointments" ADD COLUMN     "masterServiceId" VARCHAR(36) NOT NULL,
ADD COLUMN     "timezoneOffset" INTEGER NOT NULL,
ALTER COLUMN "startTime" SET DATA TYPE TIME,
ALTER COLUMN "endTime" SET DATA TYPE TIME;

-- AlterTable
ALTER TABLE "MasterSchedules" DROP COLUMN "startTime",
ADD COLUMN     "startTime" TIME NOT NULL,
DROP COLUMN "endTime",
ADD COLUMN     "endTime" TIME NOT NULL;

-- AlterTable
ALTER TABLE "MasterWeeklySchedules" DROP COLUMN "startTime",
ADD COLUMN     "startTime" TIME,
DROP COLUMN "endTime",
ADD COLUMN     "endTime" TIME;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_masterServiceId_fkey" FOREIGN KEY ("masterServiceId") REFERENCES "MasterServices"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
