import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import * as cookieParser from 'cookie-parser';

import { prisma } from '@Shared/services/prisma.service';
import { AppModule } from '@Src/app.module';

describe('ProfileController (e2e)', () => {
  let app: INestApplication;
  let application: INestApplication;

  beforeEach(async () => {
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
  });

  afterAll(async () => {
    await application.close();
  });

  describe('Regular script', () => {
    test('', () => {});
  });
});
