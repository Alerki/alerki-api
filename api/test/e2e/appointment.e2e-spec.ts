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
  let master2: UserActions;
  const serviceName = 'Man haircut';
  let masterService: Prisma.MasterService;
  const scheduleStartTime = new Date();
  const scheduleEndTime = new Date(scheduleStartTime);

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
    master2 = new UserActions(app, { master: true });

    await client.register();
    await master.register();
    await master2.register();

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

    scheduleStartTime.setUTCDate(scheduleStartTime.getUTCDate() + 1);
    scheduleStartTime.setUTCHours(9);

    dateToWeekDay(scheduleStartTime, true);

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

    test('try create an appointment in day off by weekly schedule', async () => {
      const startTime = new Date();
      startTime.setUTCDate(startTime.getUTCDate() + 10);
      startTime.setUTCHours(12);

      dateToWeekend(startTime);

      const { body: newMasterService } = await client.createAppointment({
        masterServiceId: masterService.id,
        startTime,
      }, 400);

      expect(newMasterService.message).toBe('The day is day off');
    });

    test('try create an appointment out of available time by weekly schedule', async () => {
      const startTime = new Date();
      startTime.setUTCDate(startTime.getUTCDate() + 10);
      startTime.setUTCHours(2);
      dateToWeekDay(startTime);

      const { body: newMasterService1 } = await client.createAppointment({
        masterServiceId: masterService.id,
        startTime,
      }, 400);

      expect(newMasterService1.message).toBe('Appointment time is outside of the week schedule available time');

      startTime.setUTCHours(22);
      const { body: newMasterService2 } = await client.createAppointment({
        masterServiceId: masterService.id,
        startTime,
      }, 400);

      expect(newMasterService2.message).toBe('Appointment time is outside of the week schedule available time');
    });

    test('try create an appointment in day off by day specific schedule', async () => {
      const scheduleStartTime = new Date();
      scheduleStartTime.setUTCDate(scheduleStartTime.getUTCDate() + 30);
      scheduleStartTime.setUTCHours(7);
      const scheduleEndTime = new Date(scheduleStartTime);
      scheduleStartTime.setUTCHours(15);

      await master.createMasterSchedule({
        startTime: scheduleStartTime,
        endTime: scheduleEndTime,
        timezoneOffset: scheduleStartTime.getTimezoneOffset() * 60 * 1000,
        dayOff: true,
      });

      const startTime = new Date(scheduleStartTime);

      const { body: newMasterService } = await client.createAppointment({
        masterServiceId: masterService.id,
        startTime,
      }, 400);

      expect(newMasterService.message).toBe('The day is day off');
    });

    test('try create an appointment out of available time by day specific schedule', async () => {
      const scheduleStartTime = new Date();
      scheduleStartTime.setUTCDate(scheduleStartTime.getUTCDate() + 36);
      scheduleStartTime.setUTCHours(12);
      scheduleStartTime.setUTCMinutes(0);
      scheduleStartTime.setUTCSeconds(0);
      scheduleStartTime.setUTCMilliseconds(0);

      const scheduleEndTime = new Date(scheduleStartTime);
      scheduleEndTime.setUTCHours(scheduleEndTime.getUTCHours() + 2);

      await master.createMasterSchedule({
        startTime: scheduleStartTime,
        endTime: scheduleEndTime,
        timezoneOffset: scheduleStartTime.getTimezoneOffset() * 60 * 1000,
        dayOff: false,
      });

      const startTime = new Date(scheduleStartTime);
      startTime.setUTCHours(startTime.getUTCHours() - 1);

      const { body: newMasterService1 } = await client.createAppointment({
        masterServiceId: masterService.id,
        startTime,
      }, 400);

      expect(newMasterService1.message).toBe('Appointment time is outside of the day specify schedule available time');

      const startTime2 = new Date(scheduleEndTime);

      const { body: newMasterService2 } = await client.createAppointment({
        masterServiceId: masterService.id,
        startTime: startTime2,
      }, 400);

      expect(newMasterService2.message).toBe('Appointment time is outside of the day specify schedule available time');
    });

    let startTime = new Date();

    test('successfully crete an appointment', async () => {
      let { body: monthlySchedule } = await client.getMasterMonthlySchedule(master.user.masterProfileId);

      const currentDate = new Date();

      for (let i = 0; i < monthlySchedule.length; i++) {
        const dayScheduleDate = new Date(monthlySchedule[i].date);
        const scheduleStartTime = new Date(monthlySchedule[i].startTime);
        dayScheduleDate.setUTCHours(scheduleStartTime.getUTCHours());

        if (currentDate < dayScheduleDate) {
          startTime = dayScheduleDate;
        }
      }

      if (!startTime) {
        currentDate.setUTCMonth(currentDate.getUTCMonth() + 1);

        const { body } = await client.getMasterMonthlySchedule(
          master.user.masterProfileId,
          {
            year: currentDate.getUTCFullYear(),
            month: currentDate.getUTCMonth() + 1,
          },
        );

        monthlySchedule = body;

        for (let i = 0; i < monthlySchedule.length; i++) {
          const dayScheduleDate = new Date(monthlySchedule[i].date);
          const scheduleStartTime = new Date(monthlySchedule[i].startTime);
          dayScheduleDate.setUTCHours(scheduleStartTime.getUTCHours());

          if (currentDate < dayScheduleDate) {
            startTime = dayScheduleDate;
          }
        }
      }

      expect(startTime).toBeDefined();

      dateToWeekDay(startTime, true);

      const { body } = await client.createAppointment({
        masterServiceId: masterService.id,
        startTime,
      });

      expect(body.startTime).toBe(startTime.toISOString());

      startTime.setUTCMilliseconds(masterService.duration);

      await client.createAppointment({
        masterServiceId: masterService.id,
        startTime,
      });
    });

    test('make an overlap', async () => {
      startTime.setUTCMilliseconds(masterService.duration - 1);

      const { body: withOverlap } = await client.createAppointment({
        masterServiceId: masterService.id,
        startTime,
      }, 400);

      expect(withOverlap.message).toBe('This time is busy');
    });

    test('make an appointment by day specific schedule', async () => {
      const scheduleStartTime = new Date();
      scheduleStartTime.setUTCDate(scheduleStartTime.getUTCDate() + 15);
      scheduleStartTime.setUTCHours(12);
      scheduleStartTime.setUTCMinutes(0);
      scheduleStartTime.setUTCSeconds(0);
      scheduleStartTime.setUTCMilliseconds(0);

      const scheduleEndTime = new Date(scheduleStartTime);
      scheduleEndTime.setUTCHours(scheduleEndTime.getUTCHours() + 2);

      await master.createMasterSchedule({
        startTime: scheduleStartTime,
        endTime: scheduleEndTime,
        timezoneOffset: scheduleStartTime.getTimezoneOffset() * 60 * 1000,
        dayOff: false,
      });

      const startTime = new Date(scheduleStartTime);

      const { body } = await client.createAppointment({
        masterServiceId: masterService.id,
        startTime,
      });

      expect(body.startTime).toBe(startTime.toISOString());

      startTime.setUTCMilliseconds(masterService.duration);

      await master2.createAppointment({
        masterServiceId: masterService.id,
        startTime,
      });
    });
  });

  describe('get schedule actions', () => {
    test('get appointments for client', async () => {
      const dbClientAppointments = await prisma.appointment.findMany({
        where: {
          clientId: client.user.clientProfileId,
        },
      });

      expect(dbClientAppointments).toHaveLength(3);

      const { body: clientAppointments } = await client.getAppointments({ client: true });

      expect(clientAppointments).toHaveLength(dbClientAppointments.length);
    });

    test('get appointments for master', async () => {
      const dbMasterAppointments = await prisma.appointment.findMany({
        where: {
          masterId: master.user.masterProfileId,
        },
      });

      expect(dbMasterAppointments).toHaveLength(4);

      const { body: clientAppointments } = await master.getAppointments({ master: true });

      expect(clientAppointments).toHaveLength(dbMasterAppointments.length);
    });

    test('get all appointment', async () => {
      const { body: clientAppointments } = await client.getAppointments();
      await master2.getAppointments();

      expect(clientAppointments).toHaveLength(3);
    });

    test('get appointment by ID', async () => {
      const dbAppointment = await prisma.appointment.findFirst();

      const { body: appointment } = await UserActions.getAppointmentById(
        app,
        dbAppointment.id,
      );

      expect(appointment.id).toBe(dbAppointment.id);
    });

    test('try to get not exist appointment', async () => {
      const { body } = await UserActions.getAppointmentById(
        app,
        randomUUID(),
        404,
      );

      expect(body.message).toBe('Appointment not exists');
    });
  });

  let appointments: Array<Prisma.Appointment> = [];

  describe('confirm appointment', () => {
    beforeAll(async () => {
      appointments = await prisma.appointment.findMany({
        where: {
          clientId: client.user.clientProfileId,
        },
      });

      expect(appointments.length).toBeGreaterThanOrEqual(1);
    });

    test('try to confirm appointment that not belongs to user', async () => {
      const { body } = await master2.confirmAppointment(
        appointments[0].id,
        400,
      );

      expect(body.message).toBe('This appointment not belongs to you');
    });

    test('try to confirm appointment being client', async () => {
      const { body } = await client.confirmAppointment(
        appointments[0].id,
        400,
      );

      expect(body.message).toBe('Only master can confirm appointment');
    });

    test('confirm appointment successfully', async () => {
      const { body } = await master.confirmAppointment(
        appointments[0].id,
      );

      expect(body.confirm).toBe(true);
    });
  });

  describe('cancel appointment actions', () => {
    test('try to cancel appointment that not belongs to user', async () => {
      const { body } = await master2.cancelAppointment(
        appointments[0].id,
        400,
      );

      expect(body.message).toBe('This appointment not belongs to you');
    });

    test('successfully cancel appointment as client', async () => {
      const { body } = await client.cancelAppointment(
        appointments[0].id,
      );

      expect(body.cancel).toBe(true);
    });

    test('successfully cancel appointment as master', async () => {
      const { body } = await master.cancelAppointment(
        appointments[1].id,
      );

      expect(body.cancel).toBe(true);
    });
  });
});
