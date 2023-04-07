import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import * as cookieParser from 'cookie-parser';
import type { Application } from 'express';
import * as request from 'supertest';

import { AppModule } from '../../src/app.module';
import { UserActions } from '../utils/actions.util';
import { clearDatabaseUtil } from '../utils/clear-database.util';
import getCookieUtil from '../utils/get-cookie.util';
import { sleep } from '../utils/sleep.util';

describe('Auth module testing', () => {
  let app: Application;
  let application: INestApplication;
  let prisma: PrismaClient;

  beforeAll(async () => {
    const moduleFixtures = await Test.createTestingModule({
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
      )
      .init();

    app = application.getHttpServer();

    prisma = new PrismaClient();
  });

  beforeEach(async () => {
    await clearDatabaseUtil(prisma);
  });

  afterAll(async () => {
    await application.close();
  });

  describe('Test all endpoints', () => {
    it('should register user', async () => {
      const user = new UserActions(app);

      const usersBefore = await prisma.user.findMany({});

      expect(usersBefore).toHaveLength(0);

      await request(app)
        .post('/auth/register')
        .send(user.credentials)
        .expect(201);

      const usersAfter = await prisma.user.findMany({});

      expect(usersAfter).toHaveLength(1);

      expect(usersAfter[0].email).toBe(user.email);
      expect(usersAfter[0].username).toBe(user.username);
      expect(usersAfter[0].password).not.toBe(user.password);
    });

    it('should log-in user', async () => {
      const user = new UserActions(app);

      await request(app)
        .post('/auth/register')
        .send(user.credentials)
        .expect(201);

      const r = await request(app)
        .post('/auth/log-in')
        .send(user.credentials)
        .expect(201);

      const cookies = getCookieUtil(r);

      const sessions = await prisma.session.findMany({});

      expect(r.body.accessToken).toBeDefined();
      expect(sessions).toHaveLength(1);
      expect(sessions[0].refreshToken).toBe(cookies.refreshToken.value);
    });

    it('should log-out user', async () => {
      const user = new UserActions(app);
      await user.register();

      const sessionsBefore = await prisma.session.findMany({});
      expect(sessionsBefore).toHaveLength(1);

      await user.request({
        method: 'get',
        url: '/auth/log-out',
        expect: 200,
      });

      const sessionsAfter = await prisma.session.findMany({});
      expect(sessionsAfter).toHaveLength(0);
    });

    it('should refresh tokens', async () => {
      const user = new UserActions(app);

      await user.register();

      const firstAccessToken = user.accessToken;
      const sessionsBefore = await prisma.session.findMany({});
      expect(sessionsBefore).toHaveLength(1);

      await sleep(1000);

      const r = await user.request({
        method: 'get',
        url: '/auth/refresh',
        expect: 200,
      });

      const sessionsAfter = await prisma.session.findMany({});
      expect(sessionsAfter).toHaveLength(1);

      expect(
        sessionsBefore[0].refreshToken !== sessionsAfter[0].refreshToken,
      ).toBe(true);
      expect(r.body.accessToken).toBeDefined();
      expect(r.body.accessToken !== firstAccessToken).toBe(true);
    });
  });
});
