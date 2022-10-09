import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Application } from 'express';
import Prisma from '@prisma/client';
import * as request from 'supertest';
import * as cookieParser from 'cookie-parser';

import { prisma } from '@Shared/services/prisma.service';
import { AppModule } from '@Src/app.module';
import getCookies from '@Test/util/get-cookies';
import { TokensService } from '@Test/util/jwt-service';


describe('ServiceController (e2e)', () => {
  let app: Application;
  let application: INestApplication;

  const tokensService = new TokensService();

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

    // Clear database
    await prisma.authSession.deleteMany();
    await prisma.user.deleteMany();
  });

  afterAll(async () => {
    await application.close();

    // Clear database
    await prisma.authSession.deleteMany();
    await prisma.user.deleteMany();
  });

  const user = {
    username: 'profile_user',
    email: 'profile@example.com',
    password: 'profile123',
    refreshToken: '',
    accessToken: '',
  };

  describe('Regular script', () => {
    test('PATCH enable-master', async () => {
      // Register and log-in user
      await request(app)
        .post('/auth/sign-up')
        .send(user)
        .expect(201);

      const signInResponse = await request(app)
        .post('/auth/sign-in')
        .send(user)
        .expect(200);

      const cookie = getCookies(signInResponse);

      user.accessToken = signInResponse.body.accessToken;
      user.refreshToken = cookie.refreshToken.value;

      // Check if user is not a master and hasn't master role

      const userBefore = await prisma.user.findFirst({
        where: {
          email: user.email,
        },
        include: {
          roles: true,
        },
      });

      expect(
        userBefore.roles.find((role: Prisma.Roles) => role.name === 'master'),
      ).toBeUndefined();

      expect(userBefore.masterProfileId).toBeNull();

      // Enable master for user
      await request(app)
        .patch('/profile/enable-master')
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(200);

      const userAfter = await prisma.user.findFirst({
        where: {
          email: user.email,
        },
        include: {
          roles: true,
          masterProfile: true,
        },
      });

      expect(
        userAfter.roles.find((role: Prisma.Roles) => role.name === 'master'),
      ).toBeTruthy();

      expect(userAfter.masterProfileId).toBeTruthy();

      expect(userAfter.masterProfile.available).toBe(true);
    });

    test('PATCH disable-master', async () => {
      await request(app)
        .patch('/profile/disable-master')
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(200);

      const userAfter = await prisma.user.findFirst({
        where: {
          email: user.email,
        },
        include: {
          roles: true,
          masterProfile: true,
        },
      });

      expect(userAfter.masterProfileId).toBeTruthy();

      expect(userAfter.masterProfile.available).toBe(false);

      expect(
        userAfter.roles.find((role: Prisma.Roles) => role.name === 'master'),
      ).toBeUndefined();
    });

    test('PATCH enable-master with exists master profile id', async () => {
      await request(app)
        .patch('/profile/enable-master')
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(200);

      const userAfter = await prisma.user.findFirst({
        where: {
          email: user.email,
        },
        include: {
          roles: true,
        },
      });

      expect(userAfter.masterProfileId).toBeTruthy();

      expect(
        userAfter.roles.find((role: Prisma.Roles) => role.name === 'master'),
      ).toBeTruthy();
    });
  });

  describe('Other cases', () => {
    test('enable master with not exists user | fake token', async () => {
      const accessToken = await tokensService.generateAccessToken(
        { id: 'bla-bla-bla' },
      );

      await request(app)
        .patch('/profile/enable-master')
        .set({ Authorization: 'Bearer ' + accessToken })
        .expect(400);
    });

    test('disable master with not exists user | fake token', async () => {
      const accessToken = await tokensService.generateAccessToken(
        { id: 'bla-bla-bla' },
      );

      await request(app)
        .patch('/profile/disable-master')
        .set({ Authorization: 'Bearer ' + accessToken })
        .expect(400);
    });

    test('disable master if he is not a master', async () => {
      await request(app)
        .patch('/profile/disable-master')
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(200);

      await request(app)
        .patch('/profile/disable-master')
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(400);
    });

    test('enable master if he is not a master', async () => {
      await request(app)
        .patch('/profile/enable-master')
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(200);

      await request(app)
        .patch('/profile/enable-master')
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(400);
    });
  });
});
