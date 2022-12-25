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
import * as util from 'util';
import { daysOfWeek } from '@Config/api/property.config';

describe.only('AuthController (e2e)', () => {
  let app: Application;
  let application: INestApplication;
  let client: UserActions;
  let master: UserActions;

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
  });

  const masterSchedules: Array<any> = [];
  let masterSchedulesCounter = 0;
  const appointments: Array<any> = [];
  let appointmentsCounter = 0;
  const workWithDate = new Date();
  let month = workWithDate.getUTCMonth();
  let year = workWithDate.getUTCFullYear();

  if (workWithDate.getUTCDate() >= 20) {
    workWithDate.setUTCMonth(workWithDate.getUTCMonth() + 1);
    month = workWithDate.getUTCMonth();
    year = workWithDate.getUTCFullYear();
  }

  beforeAll(async () => {
    const weeklyScheduleStartTime = new Date(0);
    weeklyScheduleStartTime.setUTCHours(8);
    const weeklyScheduleEndTime = new Date(0);
    weeklyScheduleEndTime.setUTCHours(18);

    await master.patchWeeklySchedule({
      startTime: weeklyScheduleStartTime,
      endTime: weeklyScheduleEndTime,
      timezoneOffset: 2 * 60 * 60 * 1000,
    });

    const { body: masterService } = await master.createMasterService({
      name: 'Haircut',
      currency: 'UAH',
      price: 100,
      duration: 10 * 60 * 1000,
      locationLat: 0,
      locationLng: 0,
    });

    const startTime = new Date();
    startTime.setUTCFullYear(year);
    startTime.setUTCMonth(month);
    startTime.setUTCDate(1);
    startTime.setUTCHours(5);
    const endTime = new Date(startTime);
    endTime.setUTCHours(16);

    // Create schedule
    masterSchedules.push((await master.createMasterSchedule({
      startTime,
      endTime,
      timezoneOffset: 2 * 60 * 60 * 1000,
      dayOff: false,
    })).body);

    startTime.setUTCDate(2);

    masterSchedules.push((await master.createMasterSchedule({
      startTime,
      endTime,
      timezoneOffset: 2 * 60 * 60 * 1000,
      dayOff: false,
    })).body);

    startTime.setUTCDate(16);

    masterSchedules.push((await master.createMasterSchedule({
      startTime,
      endTime,
      timezoneOffset: 2 * 60 * 60 * 1000,
      dayOff: false,
    })).body);

    startTime.setUTCDate(20);

    masterSchedules.push((await master.createMasterSchedule({
      startTime,
      endTime,
      timezoneOffset: 2 * 60 * 60 * 1000,
      dayOff: false,
    })).body);

    const appointmentStartTime = new Date();

    appointmentStartTime.setUTCFullYear(year);
    appointmentStartTime.setUTCMonth(month);

    appointmentStartTime.setUTCDate(appointmentStartTime.getUTCDate() + 1);
    appointmentStartTime.setUTCHours(10);
    appointmentStartTime.setUTCMinutes(0);
    appointmentStartTime.setUTCSeconds(0);
    appointmentStartTime.setUTCMilliseconds(0);

    dateToWeekDay(appointmentStartTime, true);

    // Create appointments
    appointments.push((await client.createAppointment({
      masterServiceId: masterService.id,
      startTime: appointmentStartTime,
    })).body);

    appointmentStartTime.setUTCMinutes(20);

    appointments.push((await client.createAppointment({
      masterServiceId: masterService.id,
      startTime: appointmentStartTime,
    })).body);

    appointmentStartTime.setUTCDate(appointmentStartTime.getUTCDate() + 1);
    appointmentStartTime.setUTCMinutes(30);

    appointments.push((await client.createAppointment({
      masterServiceId: masterService.id,
      startTime: appointmentStartTime,
    })).body);
  });

  test('get monthly schedule for current month', async () => {
    const { body: masterMonthlySchedule } = await client.getMasterMonthlySchedule(
      master.user.masterProfileId,
      {
        year,
        month: month + 1,
      },
    );

    const { body: masterWeeklySchedule } = await master.getWeeklySchedule();

    for (let i = 0; i < masterMonthlySchedule.length; i++) {
      const scheduleDate = new Date(masterMonthlySchedule[i].date);
      let isDaySpecificSchedule = false;

      for (let j = 0; j < masterSchedules.length; j++) {
        const daySpecificScheduleDate = new Date(masterSchedules[j].startTime);
        daySpecificScheduleDate.setUTCHours(0);
        daySpecificScheduleDate.setUTCMinutes(0);
        daySpecificScheduleDate.setUTCSeconds(0);
        daySpecificScheduleDate.setUTCMilliseconds(0);

        if (scheduleDate.toISOString() === daySpecificScheduleDate.toISOString()) {
          masterSchedulesCounter++;
          isDaySpecificSchedule = true;
          expect(masterMonthlySchedule[i].startTime).toBe(masterSchedules[j].startTime);
          expect(masterMonthlySchedule[i].endTime).toBe(masterSchedules[j].endTime);
          expect(masterMonthlySchedule[i].timezoneOffset).toBe(masterSchedules[j].timezoneOffset);
          expect(masterMonthlySchedule[i].dayOff).toBe(masterSchedules[j].dayOff);
          break;
        }
      }

      if (!isDaySpecificSchedule) {
        expect(masterMonthlySchedule[i].startTime).toBe(masterWeeklySchedule.startTime);
        expect(masterMonthlySchedule[i].endTime).toBe(masterWeeklySchedule.endTime);
        expect(masterMonthlySchedule[i].timezoneOffset).toBe(masterWeeklySchedule.timezoneOffset);
        expect(masterMonthlySchedule[i].dayOff)
          .toBe(masterWeeklySchedule[daysOfWeek[scheduleDate.getUTCDay()]]);
      }

      if (masterMonthlySchedule[i].appointments.length !== 0) {
        for (let j = 0; j < masterMonthlySchedule[i].appointments.length; j++) {
          const appointmentDate = new Date(masterMonthlySchedule[i].appointments[j].startTime);

          for (let k = 0; k < appointments.length; k++) {
            const appointmentsDate = new Date(appointments[k].startTime);

            if (appointmentsDate.toISOString() === appointmentDate.toISOString()) {
              appointmentsCounter++;
              expect(appointments[k]).toMatchObject(masterMonthlySchedule[i].appointments[j]);
            }
          }
        }
      }
    }

    expect(masterSchedulesCounter).toBe(masterSchedules.length);
    expect(appointmentsCounter).toBe(appointments.length);
  });
});
