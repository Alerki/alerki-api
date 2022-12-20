import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as cookieParser from 'cookie-parser';
import * as request from 'supertest';

import { prisma } from '@Shared/services/prisma.service';
import { AppModule } from '@Src/app.module';
import { databaseSetup } from '@Src/util';
import { clearDatabase } from '@Test/util/clear-database';
import { UserActions } from '@Test/util/user-actions';
import { Application } from 'express';

describe('ServiceController (e2e)', () => {
  let app: Application;
  let application: INestApplication;

  beforeAll(async () => {
    // Init express application
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    application = await module
      .createNestApplication()
      .use(cookieParser())
      .useGlobalPipes(new ValidationPipe({ transform: true }))
      .init();

    app = application.getHttpServer();

    await clearDatabase();

    await databaseSetup();
  });

  afterAll(async () => {
    await application.close();
    await clearDatabase();
  });

  describe('get service actions', () => {
    const serviceName = 'Haircut';

    beforeAll(async () => {
      await prisma.service.create({
        data: {
          name: serviceName,
        },
      });
    });

    test('get master service', async () => {
      const user: UserActions = new UserActions(app, { master: true });
      await user.register();

      const { body: services } = await UserActions.getServices(
        app,
        serviceName,
      );

      expect(services).toHaveLength(1);

      const { body: unavailableUser } = await UserActions.getMasterServices(
        app,
        services[0].id,
      );

      expect(unavailableUser).toHaveLength(0);

      await user.patchWeeklySchedule({
        startTime: new Date(),
        endTime: new Date(),
        timezoneOffset: 0,
      });

      expect(services).toHaveLength(1);

      await user.createMasterService({
        name: services[0].name,
        currency: 'UAH',
        price: 100,
        duration: 15 * 60 * 1000,
        locationLat: 0.1,
        locationLng: 0.1,
      });

      const { body: masterServices } = await UserActions.getMasterServices(
        app,
        services[0].id,
      );

      expect(masterServices).toHaveLength(1);
    });

    test('get not exists service', async () => {
      await request(app)
        .get('/service')
        .query({ name: 'not-exists-name' })
        .expect(404);
    });

    test('get service without name query', async () => {
      await request(app)
        .get('/service')
        .expect(200);
    });

    test('search with spaces in name', async () => {
      await request(app)
        .get('/service')
        .query({ name: 'i a l i' })
        .expect(404);
    });
  });
});
