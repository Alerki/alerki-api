import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import * as request from 'supertest';
import * as cookieParser from 'cookie-parser';
import * as jwt from 'jsonwebtoken';

import { AppModule } from '@Src/app.module';
import getCookies from '@Test/util/get-cookies';
import sleep from '@Test/util/sleep';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let prisma: PrismaClient;

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

    // Connect to database
    prisma = new PrismaClient();
  });

  describe('Regular script', () => {
    const user = {
      username: 'regular',
      email: 'regular@example.com',
      password: 'regular',
      refreshToken: '',
      accessToken: '',
    };

    test('POST sign-up', async () => {
      await request(app)
        .post('/auth/sign-up')
        .send(user)
        .expect(201);

      const users = await prisma.user.findMany({});
      expect(users.length).toBe(1);
      expect(users[0].username).toBe(user.username);
      expect(users[0].email).toBe(user.email);

      const clientProfile = await prisma.clientProfile.findMany({});
      expect(clientProfile.length).toBe(1);
    });

    test('POST sign-in', async () => {
      const r = await request(app)
        .post('/auth/sign-in')
        .send(user)
        .expect(200);

      expect(r.body.accessToken).toBeTruthy();

      const cookies = getCookies(r);
      expect(cookies.refreshToken.value).toBeTruthy();

      user.refreshToken = cookies.refreshToken.value;
      user.accessToken = r.body.accessToken;

      const authSession = await prisma.authSession.findMany();
      expect(authSession.length).toBe(1);
      expect(cookies.refreshToken.value).toBe(authSession[0].refreshToken);

      const decodedRefreshToken = jwt.decode(user.refreshToken);

      if (typeof decodedRefreshToken === 'object') {
        expect(decodedRefreshToken.id).toBe(authSession[0].userId);
      } else {
        throw new Error('Expect token to be an object');
      }

      const decodedAccessToken = jwt.decode(user.refreshToken);

      if (typeof decodedAccessToken === 'object') {
        expect(decodedAccessToken.id).toBe(authSession[0].userId);
      } else {
        throw new Error('Expect token to be an object');
      }
    });

    test('GET sessions', async () => {
      const r = await request(app)
        .get('/auth/sessions')
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(200);

      expect(r.body[0].refreshToken).toBe(user.refreshToken);
    });

    test('PATCH session', async () => {
      const r1 = await request(app)
        .get('/auth/sessions')
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(200);

      const r2 = await request(app)
        .patch('/auth/sessions/' + r1.body[0].id)
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .send({ deviceName: 'newOne' })
        .expect(200);

      expect(r2.body.deviceName).toBe('newOne');
    });

    test('GET refresh', async () => {
      await sleep(1000);
      const r = await request(app)
        .get('/auth/refresh')
        .set('Cookie', [`refreshToken=${user.refreshToken}`])
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(200);

      expect(r.body.accessToken).toBeTruthy();

      const sessions = await prisma.authSession.findMany();

      expect(sessions.length).toBe(1);
      expect(sessions[0].refreshToken).not.toBe(user.refreshToken);

      const cookies = getCookies(r);

      user.accessToken = r.body.accessToken;
      user.refreshToken = cookies.refreshToken.value;
    });

    test('GET log-out', async () => {
      const r = await request(app)
        .get('/auth/log-out')
        .set('Cookie', [`refreshToken=${user.refreshToken}`])
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(200);

      const cookies = getCookies(r);

      expect(cookies.refreshToken.value).toBe('');
      expect(cookies.refreshToken.Expires)
        .toBe('Thu, 01 Jan 1970 00:00:00 GMT');

      const authSession = await prisma.authSession.findMany();
      expect(authSession.length).toBe(0);
    });
  });
});
