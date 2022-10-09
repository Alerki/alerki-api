-- CreateTable
CREATE TABLE "UserPictures" (
    "id" TEXT NOT NULL,
    "picture" BYTEA NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserPictures_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Roles" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Roles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL,
    "email" VARCHAR(320) NOT NULL,
    "username" VARCHAR(15) NOT NULL,
    "firstName" VARCHAR(30),
    "lastName" VARCHAR(30),
    "pictureId" VARCHAR(36),
    "clientProfileId" VARCHAR(36) NOT NULL,
    "masterProfileId" VARCHAR(36),
    "phoneNumber" VARCHAR(20),
    "password" VARCHAR(60),
    "banned" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AuthSessions" (
    "id" TEXT NOT NULL,
    "userId" VARCHAR(36) NOT NULL,
    "refreshToken" VARCHAR(1024) NOT NULL,
    "deviceName" VARCHAR(20) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "AuthSessions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterProfiles" (
    "id" TEXT NOT NULL,
    "workDaysId" VARCHAR(36),
    "available" BOOLEAN NOT NULL DEFAULT true,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MasterProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterProfilesToMasterSchedule" (
    "id" TEXT NOT NULL,
    "masterId" VARCHAR(36) NOT NULL,
    "scheduleId" VARCHAR(36) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MasterProfilesToMasterSchedule_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ClientProfiles" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ClientProfiles_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Services" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(20) NOT NULL,
    "available" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Services_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterServices" (
    "id" TEXT NOT NULL,
    "serviceId" VARCHAR(36) NOT NULL,
    "masterId" VARCHAR(36) NOT NULL,
    "currency" VARCHAR(3) NOT NULL,
    "price" INTEGER NOT NULL,
    "duration" TIMETZ NOT NULL,
    "locationLat" DOUBLE PRECISION NOT NULL,
    "locationLng" DOUBLE PRECISION NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MasterServices_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterSchedules" (
    "id" TEXT NOT NULL,
    "startTime" TIMETZ NOT NULL,
    "endTime" TIMETZ NOT NULL,
    "date" DATE NOT NULL,
    "dayOff" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MasterSchedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MasterWorkDays" (
    "id" TEXT NOT NULL,
    "monday" BOOLEAN NOT NULL DEFAULT true,
    "tuesday" BOOLEAN NOT NULL DEFAULT true,
    "wednesday" BOOLEAN NOT NULL DEFAULT true,
    "thursday" BOOLEAN NOT NULL DEFAULT true,
    "friday" BOOLEAN NOT NULL DEFAULT true,
    "saturday" BOOLEAN NOT NULL DEFAULT false,
    "sunday" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "MasterWorkDays_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Appointments" (
    "id" TEXT NOT NULL,
    "masterId" VARCHAR(36) NOT NULL,
    "clientId" VARCHAR(36) NOT NULL,
    "startTime" TIMESTAMP(3) NOT NULL,
    "endTime" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Appointments_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NotificationTypes" (
    "id" TEXT NOT NULL,
    "name" VARCHAR(32) NOT NULL,
    "template" VARCHAR(128) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "NotificationTypes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notifications" (
    "id" TEXT NOT NULL,
    "notificationTypeId" VARCHAR(36) NOT NULL,
    "senderId" VARCHAR(36) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Notifications_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_RolesToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_NotificationToUser" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Roles_name_key" ON "Roles"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Users_email_key" ON "Users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Users_username_key" ON "Users"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Users_pictureId_key" ON "Users"("pictureId");

-- CreateIndex
CREATE UNIQUE INDEX "Users_clientProfileId_key" ON "Users"("clientProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "Users_masterProfileId_key" ON "Users"("masterProfileId");

-- CreateIndex
CREATE UNIQUE INDEX "Users_phoneNumber_key" ON "Users"("phoneNumber");

-- CreateIndex
CREATE UNIQUE INDEX "MasterProfiles_workDaysId_key" ON "MasterProfiles"("workDaysId");

-- CreateIndex
CREATE UNIQUE INDEX "MasterProfilesToMasterSchedule_scheduleId_key" ON "MasterProfilesToMasterSchedule"("scheduleId");

-- CreateIndex
CREATE UNIQUE INDEX "Services_name_key" ON "Services"("name");

-- CreateIndex
CREATE UNIQUE INDEX "_RolesToUser_AB_unique" ON "_RolesToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_RolesToUser_B_index" ON "_RolesToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_NotificationToUser_AB_unique" ON "_NotificationToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_NotificationToUser_B_index" ON "_NotificationToUser"("B");

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_pictureId_fkey" FOREIGN KEY ("pictureId") REFERENCES "UserPictures"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_clientProfileId_fkey" FOREIGN KEY ("clientProfileId") REFERENCES "ClientProfiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Users" ADD CONSTRAINT "Users_masterProfileId_fkey" FOREIGN KEY ("masterProfileId") REFERENCES "MasterProfiles"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuthSessions" ADD CONSTRAINT "AuthSessions_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterProfiles" ADD CONSTRAINT "MasterProfiles_workDaysId_fkey" FOREIGN KEY ("workDaysId") REFERENCES "MasterWorkDays"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterProfilesToMasterSchedule" ADD CONSTRAINT "MasterProfilesToMasterSchedule_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "MasterProfiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterProfilesToMasterSchedule" ADD CONSTRAINT "MasterProfilesToMasterSchedule_scheduleId_fkey" FOREIGN KEY ("scheduleId") REFERENCES "MasterSchedules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterServices" ADD CONSTRAINT "MasterServices_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Services"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "MasterServices" ADD CONSTRAINT "MasterServices_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "MasterProfiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_masterId_fkey" FOREIGN KEY ("masterId") REFERENCES "MasterProfiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Appointments" ADD CONSTRAINT "Appointments_clientId_fkey" FOREIGN KEY ("clientId") REFERENCES "ClientProfiles"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_notificationTypeId_fkey" FOREIGN KEY ("notificationTypeId") REFERENCES "NotificationTypes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notifications" ADD CONSTRAINT "Notifications_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "Users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RolesToUser" ADD CONSTRAINT "_RolesToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RolesToUser" ADD CONSTRAINT "_RolesToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotificationToUser" ADD CONSTRAINT "_NotificationToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Notifications"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_NotificationToUser" ADD CONSTRAINT "_NotificationToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "Users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
