import type { INestApplication } from '@nestjs/common';
import { ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as cookieParser from 'cookie-parser';
import type { Application } from 'express';
import * as request from 'supertest';

import { AppModule } from '../src/app.module';

describe('Auth module testing', () => {
  let app: Application;
  let application: INestApplication;

  beforeAll(async () => {
    const moduleFixtures: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    application = await moduleFixtures
      .createNestApplication()
      .use(cookieParser())
      .useGlobalPipes(
        new ValidationPipe({
          whitelist: true,
          transform: true,
        }),
      );

    app = application.getHttpServer();
  });

  afterAll(async () => {
    await application.close();
  });

  describe('Regular script', () => {
    const user = {
      email: 'new-user@gmail.com',
      username: 'new_user',
      password: '12345678',
    };

    it('register new user', async () => {
      const r = await request(app)
        .post('/auth/register')
        .send(user)
        .expect(200);

      expect(r.body.accessToken).toBeDefined();
    });
  });
});
