/* eslint-disable max-len */
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as cookieParser from 'cookie-parser';
import { Application } from 'express';
import Prisma from '@prisma/client';

import { AppModule } from '@Src/app.module';
import { UserActions } from '@Test/util/user-actions';
import { clearDatabase } from '@Test/util/clear-database';
import { databaseSetup } from '@Src/util';
import { dateToWeekDay, dateToWeekend } from '@Test/util/time';
import { randomUUID } from 'crypto';

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

  describe('create appointment actions', () => {
    const serviceName = 'Man haircut';
    let services: Prisma.Service[];
    let masterServices: Prisma.MasterService[];
    let masterSchedules: Prisma.MasterSchedule[];

    beforeAll(async () => {
      const startTime = new Date(0);
      startTime.setUTCHours(12);

      const endTime = new Date(0);
      endTime.setUTCHours(18);

      const date = new Date();
      date.setUTCDate(date.getUTCDate() + 2);

      await master.createMasterSchedule({
        startTime,
        endTime,
        timezoneOffset: 2 * 60 * 60 * 1000,
        date,
        dayOff: false,
      });

      await master.patchWeeklySchedule({
        startTime,
        endTime,
        timezoneOffset: 2 * 60 * 60 * 1000,
      });

      await master.createMasterService({
        name: serviceName,
        currency: 'UAH',
        price: 100,
        duration: 12 * 60 * 1000,
        locationLat: 0.1,
        locationLng: 0.1,
      });
    });

    test('successfully create an appointment', async () => {
      services = (await UserActions.getServices(
        app,
        serviceName,
      )).body;

      expect(services).toHaveLength(1);

      masterServices = (await UserActions.getMasterServices(
        app,
        services[0].id,
      )).body;

      expect(masterServices).toHaveLength(1);

      masterSchedules = (await UserActions.getMasterSchedule(
        app,
        masterServices[0].masterId,
        {},
      )).body;

      const scheduleStartTime = new Date(masterSchedules[0].startTime);

      const startTime = new Date(masterSchedules[0].date);
      startTime.setUTCHours(scheduleStartTime.getUTCHours());

      const { body: appointment } = await client.createAppointment({
        clientId: client.user.clientProfileId,
        masterServiceId: masterServices[0].id,
        startTime,
      });

      const checkStartTime = new Date(masterSchedules[0].date);
      checkStartTime.setUTCHours(scheduleStartTime.getUTCHours());
      const checkEndTime = new Date(checkStartTime);
      checkEndTime.setUTCMilliseconds(masterServices[0].duration);

      expect(appointment.masterId).toBe(masterSchedules[0].masterId);
      expect(appointment.masterServiceId).toBe(masterServices[0].id);
      expect(appointment.clientId).toBe(client.user.clientProfileId);
      expect(appointment.startTime).toBe(checkStartTime.toISOString());
      expect(appointment.endTime).toBe(checkEndTime.toISOString());
      expect(appointment.timezoneOffset).toBe(2 * 60 * 60 * 1000);
    });

    test('try to create appointment in the past', async () => {
      const startTime = new Date();
      startTime.setUTCDate(startTime.getUTCDate() - 1);

      dateToWeekDay(startTime);
      const { body } = await client.createAppointment({
        clientId: client.user.clientProfileId,
        masterServiceId: masterServices[0].id,
        startTime,
      }, 400);

      expect(body.message).toBe('Impossible to make appointment in the past');
    });

    test('try create appointment with bad client ID', async () => {
      const startTime = new Date();
      startTime.setUTCDate(startTime.getUTCDate() + 20);
      startTime.setUTCDate(startTime.getUTCDate() - 1);

      dateToWeekDay(startTime);
      const { body } = await client.createAppointment({
        clientId: randomUUID(),
        masterServiceId: masterServices[0].id,
        startTime,
      }, 400);

      expect(body.message).toBe('You need to put your own ID to client or master ID');
    });

    test('try create appointment with not exists service', async () => {
      const startTime = new Date();
      startTime.setUTCDate(startTime.getUTCDate() + 10);

      dateToWeekDay(startTime);

      const { body } = await client.createAppointment({
        clientId: client.user.clientProfileId,
        masterServiceId: randomUUID(),
        startTime,
      }, 404);

      expect(body.message).toBe('Master service not exists');
    });

    test('try create appointment with day off weekly schedule', async () => {
      const startTime = new Date();
      startTime.setUTCDate(startTime.getUTCDate() + 10);

      dateToWeekend(startTime);

      const { body } = await client.createAppointment({
        clientId: client.user.clientProfileId,
        masterServiceId: masterServices[0].id,
        startTime,
      }, 400);

      expect(body.message).toBe('The day is day off');
    });

    test('try create appointment with day off day specific schedule', async () => {
      const newScheduleDate = new Date();
      newScheduleDate.setUTCDate(newScheduleDate.getUTCDate() + 10);
      dateToWeekDay(newScheduleDate);

      await master.createMasterSchedule({
        date: newScheduleDate,
        dayOff: true,
        startTime: new Date(),
        endTime: new Date(),
        timezoneOffset: 0,
      });

      const { body } = await client.createAppointment({
        clientId: client.user.clientProfileId,
        masterServiceId: masterServices[0].id,
        startTime: newScheduleDate,
      }, 400);

      expect(body.message).toBe('The day is day off');
    });

    test('try create appointment out of available weekly schedule time', async () => {
      const startTime = new Date();
      startTime.setUTCDate(startTime.getUTCDate() + 30);
      dateToWeekDay(startTime);
      startTime.setUTCHours(1);

      const { body } = await client.createAppointment({
        clientId: client.user.clientProfileId,
        masterServiceId: masterServices[0].id,
        startTime,
      }, 400);

      expect(body.message).toBe('Appointment time is outside of the week schedule available time');
    });

    test('try create appointment out of day specific schedule time', async () => {
      const scheduleDate = new Date();
      scheduleDate.setUTCDate(scheduleDate.getUTCDate() + 15);
      const scheduleStartTime = new Date(0);
      scheduleStartTime.setUTCHours(13);
      const scheduleEndTime = new Date(0);
      scheduleEndTime.setUTCHours(14);

      dateToWeekDay(scheduleDate);

      await master.createMasterSchedule({
        date: scheduleDate,
        dayOff: false,
        startTime: scheduleStartTime,
        endTime: scheduleEndTime,
        timezoneOffset: 0,
      });

      const startTime = new Date(scheduleDate);
      startTime.setUTCHours(scheduleEndTime.getUTCHours());

      const { body } = await client.createAppointment({
        clientId: client.user.clientProfileId,
        masterServiceId: masterServices[0].id,
        startTime,
      }, 400);

      expect(body.message).toBe('Appointment time is outside of the day specify schedule available time');
    });

    test.todo('try create appointment to not a master');

    test.todo('try create appointment to unavailable master');

    test.todo(
      'try create appointment with fake access token(not exists user ID)',
    );
  });

  test.todo('patch appointment actions');

  test.todo('get appointment actions');
});
