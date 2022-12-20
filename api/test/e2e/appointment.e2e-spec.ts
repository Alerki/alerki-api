import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as cookieParser from 'cookie-parser';
import { Application } from 'express';

import { AppModule } from '@Src/app.module';
import { UserActions } from '@Test/util/user-actions';

describe('AuthController (e2e)', () => {
  let app: Application;
  let application: INestApplication;
  let client: UserActions;
  let master: UserActions;
  let appointmentDate = new Date();
  appointmentDate.setUTCDate(appointmentDate.getUTCDate() + 2);
  if (
    appointmentDate.getUTCDay() === 5 ||
    appointmentDate.getUTCDay() === 6
  ) {
    appointmentDate.setUTCDate(appointmentDate.getUTCDate() + 2);
  }

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

    // // Create user
    // client = new UserActions(app);
    // master = new UserActions(app, { master: true });

    // // Create schedule
    // const startTime = new Date(0);
    // startTime.setUTCHours(12);

    // const endTime = new Date(0);
    // endTime.setUTCHours(18);

    // const date = new Date();
    // date.setUTCDate(date.getUTCDate() + 2);

    // master.createMasterSchedule({
    //   startTime,
    //   endTime,
    //   timezoneOffset: 2 * 60 * 1000,
    //   date,
    //   dayOff: false,
    // });

    // master.patchWeeklySchedule({
    //   startTime,
    //   endTime,
    // });
  });

  describe('create appointment actions', () => {
    test.todo('successfully create an appointment');

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