import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import * as cookieParser from 'cookie-parser';

import { AppModule } from '@Src/app.module';

describe('AppController (e2e)', () => {
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
  });

  describe('Regular script', () => {
    test('GET session', async () => {
      await request(app)
        .get('/service')
        .query({ name: 'name' })
        .expect(200);
    });
  });

  describe('Other cases', () => {
    describe('Prohibit search', () => {
      test('without name query', async () => {
        await request(app)
          .get('/service')
          .expect(400);
      });
    });
  });
});
