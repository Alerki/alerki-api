/* eslint-disable max-len */
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as cookieParser from 'cookie-parser';
import { Application } from 'express';
import Prisma, { MasterWeeklySchedule } from '@prisma/client';

import { AppModule } from '@Src/app.module';
import { UserActions } from '@Test/util/user-actions';
import { clearDatabase } from '@Test/util/clear-database';
import { databaseSetup } from '@Src/util';
import { dateToWeekDay, dateToWeekend } from '@Test/util/time';
import { randomUUID } from 'crypto';

describe('AuthController (e2e)', () => {
  let app: Application;
  let application: INestApplication;
  let client: UserActions;
  let master: UserActions;
  const serviceName = 'Man haircut';
  let masterService: Prisma.MasterService;

  beforeAll(async () => {
    // Init express application
    const module: TestingModule = await Test
      .createTestingModule({
        imports: [AppModule],
      })
      .compile();

    application = await module
      .createNestApplication()
      .use(cookieParser())
      .useGlobalPipes(new ValidationPipe({ transform: true }))
      .init();

    app = application.getHttpServer();

    await clearDatabase();

    await databaseSetup();

    // Create user
    client = new UserActions(app);
    master = new UserActions(app, { master: true });

    await client.register();
    await master.register();

    const weeklyScheduleStartTime = new Date(0);
    weeklyScheduleStartTime.setUTCHours(9);
    const weeklyScheduleEndTime = new Date(0);
    weeklyScheduleEndTime.setUTCHours(16);

    await master.patchWeeklySchedule({
      startTime: weeklyScheduleStartTime,
      endTime: weeklyScheduleEndTime,
      timezoneOffset: weeklyScheduleStartTime.getTimezoneOffset() * 60 * 1000,
    });

    const { body: newMasterService } = await master.createMasterService({
      name: serviceName,
      duration: 10 * 60 * 1000,
      currency: 'UAH',
      price: 100,
      locationLat: 0,
      locationLng: 0,
    });

    masterService = newMasterService;

    const scheduleStartTime = new Date();
    scheduleStartTime.setUTCDate(scheduleStartTime.getUTCDate() + 1);
    scheduleStartTime.setUTCHours(9);

    dateToWeekDay(scheduleStartTime, true);

    const scheduleEndTime = new Date(scheduleStartTime);
    scheduleEndTime.setUTCHours(scheduleEndTime.getUTCHours() + 8);

    await master.createMasterSchedule({
      startTime: scheduleStartTime,
      endTime: scheduleEndTime,
      timezoneOffset: scheduleStartTime.getTimezoneOffset() * 60 * 1000,
      dayOff: false,
    });
  });


  describe('create schedule actions', () => {
    test('try to create an appointment in the past', async () => {
      const startTime = new Date();

      dateToWeekDay(startTime);

      const { body } = await client.createAppointment({
        masterServiceId: masterService.id,
        startTime,
      }, 400);

      expect(body.message).toBe('Impossible to make appointment in the past');
    });

    test('try to make an appointment to itself', async () => {
      const startTime = new Date();
      startTime.setUTCDate(startTime.getUTCDate() + 10);
      startTime.setUTCHours(12);

      dateToWeekDay(startTime, true);

      const { body } = await master.createAppointment({
        masterServiceId: masterService.id,
        startTime,
      }, 400);

      expect(body.message).toBe('Impossible to make appointment to itself');
    });

    // test('try create an appointment to unavailable master', async () => {
    //   const master = new UserActions(app, { master: true });
    //   await master.register();

    //   const { body: newMasterService } = await master.creamas

    // });

    // test('successfully crete an appointment', async () => {
    //   let { body: monthlySchedule } = await client.getMasterMonthlySchedule(master.user.masterProfileId);

    //   let startTime;
    //   const currentDate = new Date();

    //   for (let i = 0; i < monthlySchedule.length; i++) {
    //     const dayScheduleDate = new Date(monthlySchedule[i].date);
    //     const scheduleStartTime = new Date(monthlySchedule[i].startTime);
    //     dayScheduleDate.setUTCHours(scheduleStartTime.getUTCHours());

    //     if (currentDate < dayScheduleDate) {
    //       startTime = dayScheduleDate;
    //     }
    //   }

    //   if (!startTime) {
    //     currentDate.setUTCMonth(currentDate.getUTCMonth() + 1);

    //     const { body } = await client.getMasterMonthlySchedule(
    //       master.user.masterProfileId,
    //       {
    //         year: currentDate.getUTCFullYear(),
    //         month: currentDate.getUTCMonth() + 1,
    //       },
    //     );

    //     monthlySchedule = body;

    //     for (let i = 0; i < monthlySchedule.length; i++) {
    //       const dayScheduleDate = new Date(monthlySchedule[i].date);
    //       const scheduleStartTime = new Date(monthlySchedule[i].startTime);
    //       dayScheduleDate.setUTCHours(scheduleStartTime.getUTCHours());

    //       if (currentDate < dayScheduleDate) {
    //         startTime = dayScheduleDate;
    //       }
    //     }
    //   }

    //   expect(startTime).toBeDefined();

    //   console.log(new Date().toISOString(), startTime);

    //   dateToWeekDay(startTime);

    //   const { body } = await client.createAppointment({
    //     masterServiceId: masterService.id,
    //     startTime,
    //   });

    //   console.log(body);
    // });
  });

  test.todo('patch schedule actions');

  test.todo('get schedule actions');
});
