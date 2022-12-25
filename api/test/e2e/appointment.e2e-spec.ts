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
    let masterWeeklySchedule: MasterWeeklySchedule;

    beforeAll(async () => {
      const startTime = new Date(0);
      startTime.setUTCHours(12);

      const endTime = new Date(0);
      endTime.setUTCHours(18);

      await master.createMasterSchedule({
        startTime,
        endTime,
        timezoneOffset: 2 * 60 * 60 * 1000,
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

      console.log(masterServices, masterServices[0].masterId);

      masterSchedules = (await UserActions.getMasterSchedule(
        app,
        masterServices[0].masterId,
        {},
      )).body;

      console.log(masterSchedules, masterSchedules[0]?.masterId);

      masterWeeklySchedule = (await UserActions.getWeeklySchedule(
        app,
        masterSchedules[0].masterId,
      )).body;

      expect(masterWeeklySchedule).toBeDefined();

      const scheduleStartTime = new Date(masterSchedules[0].startTime);

      const startTime = new Date(masterSchedules[0].startTime);
      startTime.setUTCHours(scheduleStartTime.getUTCHours());

      const { body: appointment } = await client.createAppointment({
        masterServiceId: masterServices[0].id,
        startTime,
      });

      const checkStartTime = new Date(masterSchedules[0].startTime);
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
  });

  test.todo('patch appointment actions');

  test.todo('get appointment actions');
});
