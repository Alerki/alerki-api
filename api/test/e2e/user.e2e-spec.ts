/* eslint-disable max-len */
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import Prisma from '@prisma/client';
import * as cookieParser from 'cookie-parser';
import * as request from 'supertest';
import axios from 'axios';

import { GoogleStrategy } from '@Module/auth/google.strategy';
import { AppModule } from '@Src/app.module';
import getCookies from '@Test/util/get-cookies';
import { GoogleOAuthMock } from '@Test/util/google-oauth-mock';
import { TokensService } from '@Test/util/jwt-service';
import { Application } from 'express';
import { use } from 'passport';
import { databaseSetup } from '@Src/util';

describe('UserController (e2e)', () => {
  let app: Application;
  let googleOAuthMock: GoogleOAuthMock;
  let application: INestApplication;
  const tokensService = new TokensService;

  beforeAll(async () => {
    // Init express application
    const module: TestingModule = await Test
      .createTestingModule({
        imports: [AppModule],
      })
      .compile();

    const googleStrategy = module.get<GoogleStrategy>(GoogleStrategy);

    application = await module
      .createNestApplication()
      .use(cookieParser())
      .useGlobalPipes(new ValidationPipe({ transform: true }))
      .init();

    app = application.getHttpServer();

    googleOAuthMock = new GoogleOAuthMock({ port: 3010 }, ({
      mockUserUrl,
      mockAuthUrl,
      mockTokenUrl,
    }) => {
      // @ts-ignore
      googleStrategy._userProfileURL = mockUserUrl;

      // @ts-ignore
      googleStrategy._oauth2._authorizeUrl = mockAuthUrl;

      // @ts-ignore
      googleStrategy._oauth2._accessTokenUrl = mockTokenUrl;
    });

    await googleOAuthMock.start();

    await databaseSetup();
  });

  afterAll(async () => {
    await application.close();
    await googleOAuthMock.close();
  });

  const user = {
    username: 'some12319',
    email: 'some12319@example.com',
    password: '123123',
    refreshToken: '',
    accessToken: '',
  };

  test('prepare', async () => {
    // Set profile for Google OAuth2.0 mock
    googleOAuthMock.setProfile = {
      email: user.email,
    };

    const r = await request(app)
      // eslint-disable-next-line max-len
      .get('/auth/google/callback?code=4%2F0ARtbsJoDtkvaW23Qx7efq2uEhL405ean9kPadiNsUp0TyRHJm35j7AbD0AsEDmmIw0PFUw&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&authuser=0&prompt=none')
      .expect(200);

    const cookies = getCookies(r);

    user.refreshToken = cookies.refreshToken.value;
    user.accessToken = r.body.accessToken;
  });

  describe('Disable / enable master', () => {
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
        });

        expect(
          userBefore.roles.find((role: Prisma.Roles) => role === 'master'),
        ).toBeUndefined();

        expect(userBefore.masterProfileId).toBeNull();

        // Enable master for user
        await request(app)
          .patch('/user/enable-master')
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .expect(200);

        const userAfter = await prisma.user.findFirst({
          where: {
            email: user.email,
          },
          include: {
            masterProfile: true,
          },
        });

        expect(
          userAfter.roles.find((role: Prisma.Roles) => role === 'master'),
        ).toBeTruthy();

        expect(userAfter.masterProfileId).toBeTruthy();

        expect(userAfter.masterProfile.available).toBe(true);
      });

      test('PATCH disable-master', async () => {
        await request(app)
          .patch('/user/disable-master')
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .expect(200);

        const userAfter = await prisma.user.findFirst({
          where: {
            email: user.email,
          },
          include: {
            masterProfile: true,
          },
        });

        expect(userAfter.masterProfileId).toBeTruthy();

        expect(userAfter.masterProfile.available).toBe(false);

        expect(
          userAfter.roles.find((role: Prisma.Roles) => role === 'master'),
        ).toBeUndefined();
      });

      test('PATCH enable-master with exists master profile id', async () => {
        await request(app)
          .patch('/user/enable-master')
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .expect(200);

        const userAfter = await prisma.user.findFirst({
          where: {
            email: user.email,
          },
        });

        expect(userAfter.masterProfileId).toBeTruthy();

        expect(
          userAfter.roles.find((role: Prisma.Roles) => role === 'master'),
        ).toBeTruthy();
      });
    });

    describe('Other cases', () => {
      test('enable master with not exists user | fake token', async () => {
        const accessToken = await tokensService.generateAccessToken(
          { id: 'bla-bla-bla' },
        );

        const r = await request(app)
          .patch('/user/enable-master')
          .set({ Authorization: 'Bearer ' + accessToken })
          .expect(401);

        expect(r.body.message).toBe('Bad access token');
      });

      test('disable master with not exists user | fake token', async () => {
        const accessToken = await tokensService.generateAccessToken(
          { id: 'bla-bla-bla' },
        );

        const r = await request(app)
          .patch('/user/disable-master')
          .set({ Authorization: 'Bearer ' + accessToken })
          .expect(401);

        expect(r.body.message).toBe('Bad access token');
      });

      test('disable master if he is not a master', async () => {
        await request(app)
          .patch('/user/disable-master')
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .expect(200);

        const r = await request(app)
          .patch('/user/disable-master')
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .expect(400);

        expect(r.body.message).toBe('User is not a master');
      });

      test('enable master if user already master', async () => {
        await request(app)
          .patch('/user/enable-master')
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .expect(200);

        const r = await request(app)
          .patch('/user/enable-master')
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .expect(400);

        expect(r.body.message).toBe('User is already a master');
      });
    });
  });

  describe('Regular script', () => {
    describe('user actions', () => {
      test('get own user profile', async () => {
        const { body } = await request(app)
          .get('/user')
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .expect(200);

        expect(body.username).toBe(user.username);
        expect(body.password).toBeUndefined();
        expect(body.masterProfile).toBeNull();
        expect(body.clientProfile).toBeTruthy();
        expect(body.clientProfile.id).toBeTruthy();

        await request(app)
          .get('/user')
          .expect(401);
      });

      test('get user by username and id', async () => {
        const { body: body1 } = await request(app)
          .get('/user/' + user.username)
          .expect(200);

        expect(body1.username).toBe(user.username);
        expect(body1.password).toBeUndefined();
        expect(body1.masterProfile).toBeNull();
        expect(body1.clientProfile).toBeTruthy();
        expect(body1.clientProfile.id).toBeTruthy();

        const { body: body2 } = await request(app)
          .get('/user/' + body1.id)
          .expect(200);

        expect(body2.username).toBe(user.username);
        expect(body2.password).toBeUndefined();
        expect(body2.masterProfile).toBeNull();
        expect(body2.clientProfile).toBeTruthy();
        expect(body2.clientProfile.id).toBeTruthy();
      });

      test('get user with fake access token', async () => {
        const accessToken = await tokensService.generateAccessToken({ id: 'vad-id' });

        const { body } = await request(app)
          .get('/user')
          .set({ Authorization: 'Bearer ' + accessToken })
          .expect(404);

        expect(body.message).toBe('User profile not found');
      });

      test('get user by not exists username', async () => {
        const { body } = await request(app)
          .get('/user/92881729')
          .expect(404);

        expect(body.message).toBe('User profile not found');
      });

      test('path user', async () => {
        const { body } = await request(app)
          .patch('/user')
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .send({
            username: 'newOne',
          })
          .expect(200);

        expect(body.username).toBe('newOne');

        const accessToken = await tokensService.generateAccessToken({ id: 'bla-bla-bla' });

        await request(app)
          .patch('/user')
          .set({ Authorization: 'Bearer ' + accessToken })
          .send({
            username: 'newOne',
          })
          .expect(404);

        expect(body.username).toBe('newOne');

        await request(app)
          .patch('/user')
          .send({
            username: 'newOne',
          })
          .expect(401);
      });
    });

    describe('picture actions', () => {
      test('get picture', async () => {
        const r = await request(app)
          .get('/user')
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .expect(200);

        const { body } = await request(app)
          .get('/user/picture/' + r.body.pictureId)
          .expect(200);

        expect(body).toBeTruthy();
      });

      test('get picture with not exists id', async () => {
        const { body } = await request(app)
          .get('/user/picture/f7b1cb86-5f8f-4aac-9838-b51ffbfa22c6')
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .expect(404);

        expect(body.message).toBe('Picture not found');
      });

      test('get picture with bad id', async () => {
        const { body } = await request(app)
          .get('/user/picture/bad-id')
          .expect(400);

        expect(body.message).toBe('Validation failed (uuid is expected)');
      });

      test('patch picture 500x500', async () => {
        const image = await axios.get(
          'https://source.unsplash.com/user/c_v_r/500x500',
          { responseType: 'arraybuffer' },
        );

        // Convert data to buffer
        let imageBuffer = Buffer.from(image.data, 'utf8');

        await request(app)
          .patch('/user/picture')
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .attach('picture', imageBuffer, 'picture.jpeg')
          .expect(200);
      });

      test('patch picture 100x100', async () => {
        const image = await axios.get(
          'https://source.unsplash.com/user/c_v_r/100x100',
          { responseType: 'arraybuffer' },
        );

        // Convert data to buffer
        let imageBuffer = Buffer.from(image.data, 'utf8');

        await request(app)
          .patch('/user/picture')
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .attach('picture', imageBuffer, 'picture.jpeg')
          .expect(200);
      });

      test('patch picture with bad file', async () => {
        // Convert data to buffer
        let imageBuffer = Buffer.from('00000000000', 'utf8');

        const { body } = await request(app)
          .patch('/user/picture')
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .attach('picture', imageBuffer, 'picture.jpeg')
          .expect(400);
      });

      test('patch picture with bad file', async () => {
        // Convert data to buffer
        let imageBuffer = Buffer.from('GIF87a000', 'utf8');

        const { body } = await request(app)
          .patch('/user/picture')
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .attach('picture', imageBuffer, 'picture.jpeg')
          .expect(400);
      });
    });

    // it('enable master profile', async () => {
    //   // Prepare user
    //   await request(app)
    //     .patch('/user/enable-master')
    //     .set({ Authorization: 'Bearer ' + user.accessToken })
    //     .expect(200);
    // });

    // describe('master service', () => {
    //   test('POST create service', async () => {
    //     await request(app)
    //       .post('/user/master/service')
    //       .expect(401);

    //     const r = await request(app)
    //       .post('/user/master/service')
    //       .set({ Authorization: 'Bearer ' + user.accessToken })
    //       .send({
    //         name: 'man haircut',
    //         price: 100,
    //         currency: 'UAH',
    //         duration: 60 * 10,
    //         locationLat: 1.1,
    //         locationLng: 1.2,
    //       })
    //       .expect(201);

    //     const mastersService = await prisma.masterService.findMany();

    //     expect(mastersService).toHaveLength(1);

    //     const masterService = mastersService[0];

    //     const service = await prisma.service.findFirst({
    //       where: {
    //         id: masterService.serviceId,
    //       },
    //     });

    //     expect(service).toBeDefined();
    //     expect(service.name).toBe('man haircut');
    //     expect(masterService.price).toBe(100);
    //     expect(masterService.duration).toBe(600);
    //     expect(masterService.locationLat).toBe(1.1);
    //     expect(masterService.locationLng).toBe(1.2);

    //     expect(r.body.price).toBe(100);
    //     expect(r.body.duration).toBe(600);
    //     expect(r.body.locationLat).toBe(1.1);
    //     expect(r.body.locationLng).toBe(1.2);
    //   });
    // });

    // test('GET own service', async () => {
    //   await request(app)
    //     .get('/user/master/service')
    //     .expect(401);

    //   const { body } = await request(app)
    //     .get('/user/master/service')
    //     .set({ Authorization: 'Bearer ' + user.accessToken })
    //     .expect(200);

    //   expect(body).toHaveLength(1);
    // });

    // test('GET service by id', async () => {
    //   const User = await prisma.user.findFirst({
    //     where: {
    //       username: user.username,
    //     },
    //   });

    //   const { body } = await request(app)
    //     .get(`/user/master/${User.masterProfileId}/service`)
    //     .expect(200);

    //   expect(body).toHaveLength(1);
    // });

    // test('PATCH update service', async () => {

    // });

    // test('DELETE service', async () => {

    // });
  });

  // describe('Other cases', () => {
  //   test('with not exist username', async () => {
  //     await request(app)
  //       .get('/user/not-exists-username')
  //       .expect(404);
  //   });

  //   test('with bad picture ID', async () => {
  //     const { body } = await request(app)
  //       .get('/user/picture/bad-picture-id')
  //       .set({ Authorization: 'Bearer ' + user.accessToken })
  //       .expect(400);

  //     expect(body).toBeTruthy();
  //   });

  //   test('with not exists picture ID', async () => {
  //     const { body } = await request(app)
  //       .get('/user/picture/f0ef45ea-59ed-4fe9-afe3-95dc8303dac6')
  //       .set({ Authorization: 'Bearer ' + user.accessToken })
  //       .expect(404);

  //     expect(body).toBeTruthy();
  //   });
  // });
});
