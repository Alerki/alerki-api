-- DropForeignKey
ALTER TABLE "MasterProfiles" DROP CONSTRAINT "MasterProfiles_workDaysId_fkey";

-- AlterTable
ALTER TABLE "MasterProfiles" ALTER COLUMN "workDaysId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "MasterProfiles" ADD CONSTRAINT "MasterProfiles_workDaysId_fkey" FOREIGN KEY ("workDaysId") REFERENCES "MasterWorkDays"("id") ON DELETE SET NULL ON UPDATE CASCADE;
