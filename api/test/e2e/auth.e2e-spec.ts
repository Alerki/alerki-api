import { INestApplication, ValidationPipe, Injectable } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import Prisma from '@prisma/client';
import { Application } from 'express';
import * as request from 'supertest';
import * as cookieParser from 'cookie-parser';
import * as jwt from 'jsonwebtoken';

import { prisma } from '@Shared/services/prisma.service';
import { AppModule } from '@Src/app.module';
import getCookies from '@Test/util/get-cookies';
import sleep from '@Test/util/sleep';
import { usernameBlackListRaw } from '@Config/api/username-black-list';
import { GoogleStrategy } from '@Module/auth/google.strategy';
import { start } from '@Test/util/google-oauth-mock';

describe('AuthController (e2e)', () => {
  let app: Application;
  let googleOAuthMockPort = 3010;
  let googleOAuthMockServer: any;
  let googleOAuthMockConfig: Record<string, any> = {};
  let application: INestApplication;

  let googleStrategy: GoogleStrategy;

  beforeAll(async () => {
    // Init express application
    const module: TestingModule = await Test
      .createTestingModule({
        imports: [AppModule],
      })
      .compile();

    googleStrategy = module.get<GoogleStrategy>(GoogleStrategy);

    // @ts-ignore
    googleStrategy._userProfileURL =
      `http://localhost:${googleOAuthMockPort}/mock-user`;

    // @ts-ignore
    googleStrategy._oauth2._authorizeUrl =
      `http://localhost:${googleOAuthMockPort}/mock-auth`;

    // @ts-ignore
    googleStrategy._oauth2._accessTokenUrl =
      `http://localhost:${googleOAuthMockPort}/mock-token`;

    application = await module
      .createNestApplication()
      .use(cookieParser())
      .useGlobalPipes(new ValidationPipe({ transform: true }))
      .init();

    app = application.getHttpServer();

    // Start Google OAuth2.0 mock
    const { config, server } = await start(googleOAuthMockPort);
    googleOAuthMockConfig = config;
    googleOAuthMockServer = server;
  });

  afterAll(async () => {
    await application.close();
    googleOAuthMockServer.close();
  });

  const user = {
    username: 'regular',
    email: 'regular@example.com',
    password: 'regular',
    refreshToken: '',
    accessToken: '',
  };

  let sessions: Array<Prisma.AuthSession> = [];

  describe('Regular script', () => {
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
        // eslint-disable-next-line max-len
        .set({ 'User-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/105.0.0.0 Safari/537.36' })
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

    test('GET sessions', async () => {
      const r = await request(app)
        .get('/auth/sessions')
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(200);

      expect(r.body[0].refreshToken).toBe(user.refreshToken);
      sessions = r.body;

      const r1 = await request(app)
        .get('/auth/sessions')
        .query({
          page: 1,
          limit: 1,
        })
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(200);

      expect(r1.body.length).toBe(0);

      const r2 = await request(app)
        .get('/auth/sessions')
        .query({
          page: 0,
          limit: 1,
        })
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(200);

      expect(r2.body.length).toBe(1);
    });

    test('PATCH session', async () => {
      const r = await request(app)
        .patch('/auth/sessions/' + sessions[0].id)
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .send({ deviceName: 'newOne' })
        .expect(200);

      expect(r.body.deviceName).toBe('newOne');
    });

    test('DELETE session', async () => {
      await request(app)
        .delete('/auth/sessions/' + sessions[0].id)
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(200);

      sessions = await prisma.authSession.findMany();
      expect(sessions.length).toBe(0);
    });

    test('GET log-out', async () => {
      // Sign-in
      const signInResponse = await request(app)
        .post('/auth/sign-in')
        .send(user)
        .expect(200);

      const signInCookies = getCookies(signInResponse);

      user.accessToken = signInResponse.body.accessToken;
      user.refreshToken = signInCookies.refreshToken.value;

      // Log-out
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

  describe('Sign in/up with Google', () => {
    describe('regular script', () => {
      test('google', async () => {
        await request(app)
          .get('/auth/google')
          .expect(302);
      });

      test('sign-in', async () => {
        // Create user with
        const newClient = await prisma.clientProfile.create({ data: {} });

        await prisma.user.create({
          data: {
            email: 'random15871@example.com',
            username: 'google.mock',
            password: 'password',
            clientProfile: {
              connect: {
                id: newClient.id,
              },
            },
          },
        });

        const email = googleOAuthMockConfig.profile.email;
        const firstName = googleOAuthMockConfig.profile.given_name;
        const lastName = googleOAuthMockConfig.profile.family_name;

        await request(app)
          // eslint-disable-next-line max-len
          .get('/auth/google/callback?code=4%2F0ARtbsJoDtkvaW23Qx7efq2uEhL405ean9kPadiNsUp0TyRHJm35j7AbD0AsEDmmIw0PFUw&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&authuser=0&prompt=none')
          .expect(200);

        await request(app)
          // eslint-disable-next-line max-len
          .get('/auth/google/callback?code=4%2F0ARtbsJoDtkvaW23Qx7efq2uEhL405ean9kPadiNsUp0TyRHJm35j7AbD0AsEDmmIw0PFUw&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&authuser=0&prompt=none')
          .expect(200);

        const user = await prisma.user.findFirst({
          where: {
            email,
          },
        });

        expect(user).toBeTruthy();
        expect(user.email).toBe(email);
        expect(user.firstName).toBe(firstName);
        expect(user.lastName).toBe(lastName);
        expect(user.pictureId).toBeTruthy();

        const userPicture = await prisma.userPicture.findFirst({
          where: {
            id: user.pictureId,
          },
        });

        expect(userPicture.picture).toBeTruthy();

        const session = await prisma.authSession.findFirst({
          where: {
            userId: user.id,
          },
        });

        expect(session).toBeTruthy();
      });

      test('with picture', async () => {
        googleOAuthMockConfig.profile.email = 'new.email1941@gmail.com';
        googleOAuthMockConfig.profile.picture =
          'https://source.unsplash.com/user/c_v_r/100x100';

        await request(app)
          // eslint-disable-next-line max-len
          .get('/auth/google/callback?code=4%2F0ARtbsJoDtkvaW23Qx7efq2uEhL405ean9kPadiNsUp0TyRHJm35j7AbD0AsEDmmIw0PFUw&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&authuser=0&prompt=none')
          .expect(200);
      });

      test('without picture', async () => {
        googleOAuthMockConfig.profile.email = 'new.email194@gmail.com';
        googleOAuthMockConfig.profile.picture = [];

        await request(app)
          // eslint-disable-next-line max-len
          .get('/auth/google/callback?code=4%2F0ARtbsJoDtkvaW23Qx7efq2uEhL405ean9kPadiNsUp0TyRHJm35j7AbD0AsEDmmIw0PFUw&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&authuser=0&prompt=none')
          .expect(200);

        await prisma.authSession.deleteMany({});
      });
    });
  });

  describe('Other cases', () => {
    test('call protected route without access token', async () => {
      const r = await request(app)
        .patch('/auth/sessions/123123123')
        .send({ deviceName: 'newOne' })
        .expect(401);

      expect(r.body.message).toBe('Unauthorized');
    });

    describe('Prohibit sign-up', () => {
      describe('with bad properties', () => {
        test('with bad property types', async () => {
          await request(app)
            .post('/auth/sign-up')
            .send({
              email: 123,
              username: 'good-username',
              password: '12345678',
            })
            .expect(400);

          await request(app)
            .post('/auth/sign-up')
            .send({
              email: 'good@email.com',
              username: 123,
              password: '12345678',
            })
            .expect(400);

          await request(app)
            .post('/auth/sign-up')
            .send({
              email: 'good@email.com',
              username: 'good-username',
              password: 123,
            })
            .expect(400);
        });

        test('with bad length', async () => {
          await request(app)
            .post('/auth/sign-up')
            .send({
              email: 'a'.repeat(500) + '@example.com',
              username: 'good-username',
              password: '12345678',
            })
            .expect(400);

          await request(app)
            .post('/auth/sign-up')
            .send({
              email: 'good@email.com',
              username: '123',
              password: '12345678',
            })
            .expect(400);

          await request(app)
            .post('/auth/sign-up')
            .send({
              email: 'good@email.com',
              username: 'a'.repeat(21),
              password: '12345678',
            })
            .expect(400);

          await request(app)
            .post('/auth/sign-up')
            .send({
              email: 'good@email.com',
              username: 'good-username',
              password: 'a'.repeat(5),
            })
            .expect(400);

          await request(app)
            .post('/auth/sign-up')
            .send({
              email: 'good@email.com',
              username: 'good-username',
              password: 'a'.repeat(51),
            })
            .expect(400);
        });
      });

      test('without some required body params', async () => {
        await request(app)
          .post('/auth/sign-up')
          .send({
            username: 'good-username',
            password: '12345678',
          })
          .expect(400);

        await request(app)
          .post('/auth/sign-up')
          .send({
            email: 'good@email.com',
            password: '12345678',
          })
          .expect(400);

        await request(app)
          .post('/auth/sign-up')
          .send({
            email: 'good@email.com',
            username: 'good-username',
          })
          .expect(400);
      });

      test('with already exist email', async () => {
        await request(app)
          .post('/auth/sign-up')
          .send({
            email: user.email,
            username: 'good-username',
            password: '12345678',
          })
          .expect(400);
      });

      test('with already exists username', async () => {
        await request(app)
          .post('/auth/sign-up')
          .send({
            email: 'good-email1@example.com',
            username: user.username,
            password: '12345678',
          })
          .expect(400);
      });

      test('with blacklist username', async () => {
        for (const username of usernameBlackListRaw) {
          const r = await request(app)
            .post('/auth/sign-up')
            .send({
              email: 'good-email2@example.com',
              username: username,
              password: '12345678',
            })
            .expect(400);

          expect(r.body.message).toBe('Username not allowed');
        }
      });
    });

    describe('Prohibit sign-in', () => {
      test('with bad password', async () => {
        await request(app)
          .post('/auth/sign-in')
          .send({
            ...user,
            password: 'bad-password',
          })
          .expect(400);
      });

      test('with not exists username', async () => {
        await request(app)
          .post('/auth/sign-in')
          .send({
            ...user,
            username: 'not_exists',
          })
          .expect(400);
      });
    });

    describe('Prohibit log-out', () => {
      test('with unauthorized user', async () => {
        await request(app)
          .post('/auth/sign-in')
          .expect(401);
      });
    });

    describe('Prohibit refresh', () => {
      test('without refresh token', async () => {
        const r = await request(app)
          .get('/auth/refresh')
          .expect(400);

        expect(r.body.message).toBe('No refresh token');
      });

      test('with not exists in database refresh token', async () => {
        // Sign-in
        const signInResponse = await request(app)
          .post('/auth/sign-in')
          .send(user)
          .expect(200);

        const signInCookies = getCookies(signInResponse);

        user.accessToken = signInResponse.body.accessToken;
        user.refreshToken = signInCookies.refreshToken.value;

        // Get sessions list
        sessions = await prisma.authSession.findMany({});

        expect(sessions.length).toBe(1);

        await prisma.authSession.delete({
          where: {
            id: sessions[0].id,
          },
        });

        // Refresh
        const r = await request(app)
          .get('/auth/refresh')
          .set('Cookie', [`refreshToken=${user.refreshToken}`])
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .expect(400);

        expect(r.body.message).toBe('Refresh token not exists');
      });
    });

    describe('Prohibit get sessions', () => {
      test('with bad page and limit', async () => {
        const r = await request(app)
          .get('/auth/sessions')
          .query({
            page: -1,
            limit: -1,
          })
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .expect(400);

        expect(r.body.message).toEqual(
          ['page must not be less than 0', 'limit must not be less than 0'],
        );
      });
    });

    describe('Prohibit patch sessions', () => {
      test('with not exists session', async () => {
        // Sign-in
        const signInResponse = await request(app)
          .post('/auth/sign-in')
          .send(user)
          .expect(200);

        const signInCookies = getCookies(signInResponse);

        user.accessToken = signInResponse.body.accessToken;
        user.refreshToken = signInCookies.refreshToken.value;

        // Get sessions list
        sessions = await prisma.authSession.findMany({});

        expect(sessions.length).toBe(1);

        await prisma.authSession.delete({
          where: {
            id: sessions[0].id,
          },
        });

        const r = await request(app)
          .patch('/auth/sessions/' + sessions[0].id)
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .send({ deviceName: 'newOne' })
          .expect(400);

        expect(r.body.message).toBe('Session with specified ID not exists');
      });
    });

    describe('Prohibit delete session', () => {
      test('with not exists session', async () => {
        // Sign-in
        const signInResponse = await request(app)
          .post('/auth/sign-in')
          .send(user)
          .expect(200);

        const signInCookies = getCookies(signInResponse);

        user.accessToken = signInResponse.body.accessToken;
        user.refreshToken = signInCookies.refreshToken.value;

        // Get sessions list
        sessions = await prisma.authSession.findMany({});

        expect(sessions.length).toBe(1);

        await prisma.authSession.delete({
          where: {
            id: sessions[0].id,
          },
        });

        const r = await request(app)
          .delete('/auth/sessions/' + sessions[0].id)
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .send({ deviceName: 'newOne' })
          .expect(400);

        expect(r.body.message).toBe('Session with specified ID not exists');
      });
    });
  });
});
