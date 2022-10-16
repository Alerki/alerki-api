import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as cookieParser from 'cookie-parser';
import * as request from 'supertest';

import { prisma } from '@Shared/services/prisma.service';
import { AppModule } from '@Src/app.module';
import { databaseSetup } from '@Src/util';

describe('ServiceController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    // Init express application
    const module: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    const application = await module
      .createNestApplication()
      .use(cookieParser())
      .useGlobalPipes(new ValidationPipe({ transform: true }))
      .init();

    app = application.getHttpServer();

    await databaseSetup();
  });

  describe('Regular script', () => {
    test('GET session', async () => {
      const name = 'Haircut';
      await prisma.service.create({
        data: {
          name,
        },
      });

      await request(app)
        .get('/service')
        .query({ name })
        .expect(200);
    });
  });

  describe('Other cases', () => {
    describe('Fail search', () => {
      test('without name query', async () => {
        await request(app)
          .get('/service')
          .expect(400);
      });

      test('for not exists service', async () => {
        await request(app)
          .get('/service')
          .query({ name: 'not-exists-name' })
          .expect(404);
      });
    });
  });
});
