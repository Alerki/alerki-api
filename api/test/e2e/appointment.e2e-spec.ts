/* eslint-disable max-len */
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as cookieParser from 'cookie-parser';
import { Application } from 'express';

import { AppModule } from '@Src/app.module';
import { UserActions } from '@Test/util/user-actions';
import { clearDatabase } from '@Test/util/clear-database';
import { databaseSetup } from '@Src/util';

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

    // Create schedule
    const startTime = new Date(0);
    startTime.setUTCHours(12);

    const endTime = new Date(0);
    endTime.setUTCHours(18);

    const date = new Date();
    date.setUTCDate(date.getUTCDate() + 2);

    await master.createMasterSchedule({
      startTime,
      endTime,
      timezoneOffset: 2 * 60 * 1000,
      date,
      dayOff: false,
    });

    await master.patchWeeklySchedule({
      startTime,
      endTime,
    });
  });

  describe('create appointment actions', () => {
    test('successfully create an appointment', async () => {
      const { body: newMasterService } = await master.createMasterService({
        name: 'Man haircut',
        currency: 'UAH',
        price: 100,
        duration: 12 * 60 * 1000,
        locationLat: 0.1,
        locationLng: 0.1,
      });
    });

    // test('successfully create an appointment', async () => {
    // });

    test.todo('try to create appointment in the pas');

    test.todo('try create appointment with bad client ID');

    test.todo('try create appointment with bad master ID');

    test.todo('try create appointment without own ID');

    test.todo('try create appointment with not exists service');

    test.todo('try create appointment with day off weekly schedule');

    test.todo('try create appointment with day off day specific schedule');

    test.todo('try create appointment out of available weekly schedule time');

    test.todo('try create appointment out of day specific schedule time');

    test.todo('try create appointment to not a master');

    test.todo('try create appointment to unavailable master');

    test.todo(
      'try create appointment with fake access token(not exists user ID)',
    );
  });

  test.todo('patch appointment actions');

  test.todo('get appointment actions');
});
