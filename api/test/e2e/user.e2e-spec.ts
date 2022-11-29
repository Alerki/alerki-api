/* eslint-disable max-len */
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import Prisma from '@prisma/client';
import axios from 'axios';
import * as cookieParser from 'cookie-parser';
import * as request from 'supertest';

import { General } from '@Config/api/property.config';
import { GoogleStrategy } from '@Module/auth/google.strategy';
import { AppModule } from '@Src/app.module';
import { databaseSetup } from '@Src/util';
import { clearDatabase } from '@Test/util/clear-database';
import getCookies from '@Test/util/get-cookies';
import { TokensService } from '@Test/util/jwt-service';
import { GoogleOAuthMock } from '@Test/util/mock/google-oauth.mock';
import { ImageServerMock } from '@Test/util/mock/image-server.mock';
import { randomUUID } from '@Test/util/random-uid';
import { registerUser } from '@Test/util/register-user';
import { Application } from 'express';

describe('UserController (e2e)', () => {
  let app: Application;
  let googleOAuthMock: GoogleOAuthMock;
  let imageServerMock: ImageServerMock;
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

    imageServerMock = new ImageServerMock({ port: 3005 });

    await googleOAuthMock.start();
    await imageServerMock.start();
    await clearDatabase();
    await databaseSetup();
  });

  afterAll(async () => {
    await application.close();
    await googleOAuthMock.close();
    await imageServerMock.close();
    await clearDatabase();
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
            masterProfile: {
              include: {
                weeklySchedule: true,
              },
            },
          },
        });

        expect(
          userAfter.roles.find((role: Prisma.Roles) => role === 'master'),
        ).toBeTruthy();

        expect(userAfter.masterProfileId).toBeTruthy();
        expect(userAfter.masterProfile.weeklyScheduleId).toBeDefined();
        expect(userAfter.masterProfile.weeklySchedule).toBeDefined();
        expect(userAfter.masterProfile.weeklySchedule).toMatchObject({
          monday: true,
          tuesday: true,
          wednesday: true,
          thursday: true,
          friday: true,
          saturday: false,
          sunday: false,
        });
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
        expect(body.masterProfileId).toBeNull();
        expect(body.clientProfile).toBeTruthy();
        expect(body.clientProfileId).toBeTruthy();
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

      test('get user with master profile', async () => {
        const { accessToken } = await registerUser(app);

        await request(app)
          .patch('/user/enable-master')
          .set({ Authorization: 'Bearer ' + accessToken })
          .expect(200);

        const { body } = await request(app)
          .get('/user')
          .set({ Authorization: 'Bearer ' + accessToken })
          .expect(200);

        expect(body.masterProfile).toBeDefined();
        expect(body.masterProfileId).toBeDefined();
        expect(body.masterProfile.weeklySchedule).toBeDefined();
        expect(body.masterProfile.weeklyScheduleId).toBeDefined();
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
          `${imageServerMock.serverUrl}/500x500`,
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
          `${imageServerMock.serverUrl}/100x100`,
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

      test('patch not exists user picture', async () => {
        const user = {
          email: '929884@example.com',
          username: '192490123',
          password: '12321312',
          refreshToken: '',
          accessToken: '',
        };

        const signUp = await request(app)
          .post('/auth/sign-up')
          .send(user)
          .expect(201);

        const signIn = await request(app)
          .post('/auth/sign-in')
          .send(user)
          .expect(200);

        const cookies = getCookies(signIn);

        user.accessToken = signIn.body.accessToken;
        user.refreshToken = cookies.refreshToken.value;

        const image = await axios.get(
          `${imageServerMock.serverUrl}/100x100`,
          { responseType: 'arraybuffer' },
        );

        // Convert data to buffer
        let imageBuffer = Buffer.from(image.data, 'utf8');

        const { body } = await request(app)
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

      test('delete picture', async () => {
        await request(app)
          .delete('/user/picture')
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .expect(200);
      });

      test('delete not exists picture', async () => {
        await request(app)
          .delete('/user/picture')
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .expect(404);
      });
    });

    describe('master service actions', () => {
      describe('create master service', () => {
        test('try create service for not a master', async () => {
          const { body } = await request(app)
            .post('/user/master/service')
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .send({
              name: 'Man haircut',
              price: 100,
              currency: 'UAH',
              duration: 60 * 10,
              locationLat: 1.1,
              locationLng: 1.2,
            })
            .expect(400);

          expect(body.message).toBe('User is not a master');
        });

        it('enable master profile', async () => {
          await request(app)
            .patch('/user/enable-master')
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .expect(200);
        });

        test('create with unauthorized user', async () => {
          await request(app)
            .post('/user/master/service')
            .expect(401);
        });

        test('create with correct parameters', async () => {
          await request(app)
            .post('/user/master/service')
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .send({
              name: 'Man haircut',
              price: 100,
              currency: 'UAH',
              duration: 60 * 10,
              locationLat: 1.1,
              locationLng: 1.2,
            })
            .expect(201);

          const mastersService = await prisma.masterService.findFirst({
            where: {
              service: {
                name: 'Man haircut',
              },
            },
            include: {
              service: true,
              currency: true,
            },
          });

          expect(mastersService).toBeDefined();
          expect(mastersService.service.name).toBe('Man haircut');
          expect(mastersService.currency.code).toBe('UAH');
          expect(mastersService.price).toBe(100);
          expect(mastersService.duration).toBe(60 * 10);
          expect(mastersService.locationLat).toBe(1.1);
          expect(mastersService.locationLng).toBe(1.2);
        });

        test('create with bad currency format', async () => {
          const { body } = await request(app)
            .post('/user/master/service')
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .send({
              name: 'Man haircut',
              price: 100,
              currency: 'bad',
              duration: 60 * 10,
              locationLat: 1.1,
              locationLng: 1.2,
            })
            .expect(400);

          expect(body.message).toBe('Unavailable currency code');
        });

        test('create two master service with the same name', async () => {
          const { body } = await request(app)
            .post('/user/master/service')
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .send({
              name: 'Man haircut',
              price: 100,
              currency: 'UAH',
              duration: 60 * 10,
              locationLat: 1.1,
              locationLng: 1.2,
            })
            .expect(400);

          expect(body.message).toBe('Master service with specified name already exists');
        });

        test('try to create service with bad location latitude -91', async () => {
          const { body } = await request(app)
            .post('/user/master/service')
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .send({
              name: 'Man haircut',
              price: 100,
              currency: 'UAH',
              duration: 60 * 10,
              locationLat: General.minLatitudeValue - 1,
              locationLng: 1.2,
            })
            .expect(400);

          expect(body.message).toMatchObject(['locationLat must not be less than -90']);
        });

        test('try to create service with bad location latitude 91', async () => {
          const { body } = await request(app)
            .post('/user/master/service')
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .send({
              name: 'Man haircut',
              price: 100,
              currency: 'UAH',
              duration: 60 * 10,
              locationLat: General.maxLatitudeValue + 1,
              locationLng: 1.2,
            })
            .expect(400);

          expect(body.message).toMatchObject(['locationLat must not be greater than 90']);
        });

        test('try to create service with bad location longitude -181', async () => {
          const { body } = await request(app)
            .post('/user/master/service')
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .send({
              name: 'Man haircut',
              price: 100,
              currency: 'UAH',
              duration: 60 * 10,
              locationLat: 1.1,
              locationLng: General.minLongitudeValue - 1,
            })
            .expect(400);

          expect(body.message).toMatchObject(['locationLng must not be less than -180']);
        });

        test('try to create service with bad location longitude 181', async () => {
          const { body } = await request(app)
            .post('/user/master/service')
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .send({
              name: 'Man haircut',
              price: 100,
              currency: 'UAH',
              duration: 60 * 10,
              locationLat: 1.1,
              locationLng: General.maxLongitudeValue + 1,
            })
            .expect(400);

          expect(body.message).toMatchObject(['locationLng must not be greater than 180']);
        });
      });

      describe('get master service', () => {
        let masterProfile: Prisma.MasterProfile;

        test('get master service with bad UUID', async () => {
          const { body } = await request(app)
            .get('/user/master/bad-uuid/service')
            .expect(400);

          expect(body.message).toBe('Validation failed (uuid is expected)');
        });

        test('get master service with good UUID', async () => {
          masterProfile = (await prisma.user.findFirst({
            where: {
              email: user.email,
            },
            include: {
              masterProfile: true,
            },
          })).masterProfile;

          const { body } = await request(app)
            .get(`/user/master/${randomUUID()}/service`)
            .expect(404);

          expect(body.message).toBe('Master profile not exists');
        });

        test('get master service with good UUID', async () => {
          const { body } = await request(app)
            .get(`/user/master/${masterProfile.id}/service`)
            .expect(200);

          expect(body.length).toBe(1);
          expect(body).toMatchObject([
            {
              price: 100,
              duration: 600,
              locationLat: 1.1,
              locationLng: 1.2,
              service: {
                name: 'Man haircut',
                available: false,
              },
              currency: {
                code: 'UAH',
                character: '₴',
                available: true,
              },
            },
          ]);
        });
      });

      describe('patch master service', () => {
        let masterProfile: Prisma.MasterProfile;

        test('with not exists UUID', async () => {
          await request(app)
            .patch('/user/master/service/aaaaaaaa-aaaa-aaaa-aaaa-aaaaaaaaaaaa')
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .expect(404);
        });

        test('with master service that not belongs to current user', async () => {
          const {
            accessToken,
          } = await registerUser(app);

          await request(app)
            .patch('/user/enable-master')
            .set({ Authorization: 'Bearer ' + accessToken })
            .expect(200);

          const masterService = await request(app)
            .post('/user/master/service')
            .set({ Authorization: 'Bearer ' + accessToken })
            .send({
              name: 'Woman haircut',
              price: 100,
              currency: 'UAH',
              duration: 60 * 10,
              locationLat: 1.1,
              locationLng: 1.2,
            })
            .expect(201);

          const { body } = await request(app)
            .patch('/user/master/service/' + masterService.body.id)
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .expect(400);

          expect(body.message).toBe('The service does not belong to the user');
        });

        let masterServiceId: string;

        test('update currency', async () => {
          masterProfile = (await prisma.user.findFirst({
            where: {
              email: user.email,
            },
            include: {
              masterProfile: true,
            },
          })).masterProfile;

          const masterService = await request(app)
            .post('/user/master/service')
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .send({
              name: 'Woman haircut',
              price: 100,
              currency: 'UAH',
              duration: 60 * 10,
              locationLat: 1.1,
              locationLng: 1.2,
            })
            .expect(201);

          masterServiceId = masterService.body.id;

          const masterServiceBefore = await prisma.masterService.findFirst({
            where: {
              id: masterServiceId,
            },
            include: {
              currency: true,
            },
          });

          expect(masterServiceBefore.currency.code).toBe('UAH');

          await request(app)
            .patch('/user/master/service/' + masterServiceId)
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .send({
              currency: 'USD',
            })
            .expect(200);

          const masterServiceAfter = await prisma.masterService.findFirst({
            where: {
              id: masterServiceId,
            },
            include: {
              currency: true,
            },
          });

          expect(masterServiceAfter.currency.code).toBe('USD');
        });

        test('update master service name with not exists service', async () => {
          const masterServiceBefore = await prisma.masterService.findFirst({
            where: {
              id: masterServiceId,
            },
            include: {
              service: true,
            },
          });

          expect(masterServiceBefore.service.name).toBe('Woman haircut');

          await request(app)
            .patch('/user/master/service/' + masterServiceId)
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .send({
              name: 'Other haircut',
            })
            .expect(200);

          const masterServiceAfter = await prisma.masterService.findFirst({
            where: {
              id: masterServiceId,
            },
            include: {
              service: true,
            },
          });

          expect(masterServiceAfter.service.name).toBe('Other haircut');
        });

        test('update master service name with existing service', async () => {
          await request(app)
            .patch('/user/master/service/' + masterServiceId)
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .send({
              name: 'Man haircut',
            })
            .expect(200);
        });

        test('try to patch master service with bad location latitude -91', async () => {
          const { body } = await request(app)
            .patch('/user/master/service/' + masterServiceId)
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .send({
              locationLat: General.minLatitudeValue - 1,
            })
            .expect(400);

          expect(body.message).toMatchObject(['locationLat must not be less than -90']);
        });

        test('try to patch master service with bad location latitude 91', async () => {
          const { body } = await request(app)
            .patch('/user/master/service/' + masterServiceId)
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .send({
              locationLat: General.maxLatitudeValue + 1,
            })
            .expect(400);

          expect(body.message).toMatchObject(['locationLat must not be greater than 90']);
        });

        test('try to patch master service with bad location longitude -181', async () => {
          const { body } = await request(app)
            .patch('/user/master/service/' + masterServiceId)
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .send({
              locationLng: General.minLongitudeValue - 1,
            })
            .expect(400);

          expect(body.message).toMatchObject(['locationLng must not be less than -180']);
        });

        test('try to patch master service with bad location longitude 181', async () => {
          const { body } = await request(app)
            .patch('/user/master/service/' + masterServiceId)
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .send({
              locationLng: General.maxLongitudeValue + 1,
            })
            .expect(400);

          expect(body.message).toMatchObject(['locationLng must not be greater than 180']);
        });
      });
    });

    describe('master weekly schedule actions', () => {
      let user: Record<string, any> = {};

      describe('get schedule', () => {
        test('get schedule', async () => {
          user = await registerUser(app);

          await request(app)
            .patch('/user/enable-master')
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .expect(200);

          const getUserResponse = await request(app)
            .get('/user')
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .expect(200);

          const { body } = await request(app)
            .get(`/user/master/${getUserResponse.body.masterProfileId}/weekly-schedule`)
            .expect(200);

          expect(body).toBeDefined();
          expect(body.monday).toBeTruthy();
          expect(body.tuesday).toBeTruthy();
          expect(body.wednesday).toBeTruthy();
          expect(body.thursday).toBeTruthy();
          expect(body.friday).toBeTruthy();
          expect(body.saturday).toBeFalsy();
          expect(body.sunday).toBeFalsy();
        });

        test('try to get weekly schedule with bad UUID', async () => {
          const { body } = await request(app)
            .get('/user/master/bad-uuid/weekly-schedule')
            .expect(400);

          expect(body.message).toBe('Validation failed (uuid is expected)');
        });

        test('try to get weekly schedule for not exists master', async () => {

          const { body } = await request(app)
            .get(`/user/master/${randomUUID()}/weekly-schedule`)
            .expect(404);

          expect(body.message).toBe('Master profile not exists');
        });
      });

      describe('patch weekly schedule', () => {
        test('with fake JWT token', async () => {
          const token = await tokensService.generateAccessToken({ id: 'bad-id' });

          const { body } = await request(app)
            .patch('/user/master/weekly-schedule')
            .set({ Authorization: 'Bearer ' + token })
            .expect(404);

          expect(body.message).toBe('User not exists');
        });

        test('bulk patch', async () => {
          const { body } = await request(app)
            .patch('/user/master/weekly-schedule')
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .send({
              monday: false,
              tuesday: false,
              wednesday: false,
              thursday: false,
              friday: false,
              saturday: true,
              sunday: true,
              startTime: 9 * 60 * 1000,
              endTime: 17 * 60 * 1000,
              timezoneOffset: 2 * 60 * 1000,
            })
            .expect(200);

          expect(body.monday).toBe(false);
          expect(body.tuesday).toBe(false);
          expect(body.wednesday).toBe(false);
          expect(body.thursday).toBe(false);
          expect(body.friday).toBe(false);
          expect(body.saturday).toBe(true);
          expect(body.sunday).toBe(true);
          expect(body.startTime).toBe(9 * 60 * 1000);
          expect(body.endTime).toBe(17 * 60 * 1000);
          expect(body.timezoneOffset).toBe(2 * 60 * 1000);
        });

        test('patch each field separately', async () => {
          const weekDays = [
            'monday',
            'tuesday',
            'wednesday',
            'thursday',
            'friday',
            'saturday',
            'sunday',
          ];

          for (let day of weekDays) {
            let data: Record<string, boolean> = {};

            data[day] = true;

            const { body } = await request(app)
              .patch('/user/master/weekly-schedule')
              .set({ Authorization: 'Bearer ' + user.accessToken })
              .send(data)
              .expect(200);

            expect(body[day]).toBe(true);
          }

          const { body: body1 } = await request(app)
            .patch('/user/master/weekly-schedule')
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .send({
              startTime: 9 * 60 * 1000,
            })
            .expect(200);

          expect(body1.startTime).toBe(9 * 60 * 1000);

          const { body: body2 } = await request(app)
            .patch('/user/master/weekly-schedule')
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .send({
              startTime: 9 * 60 * 1000,
            })
            .expect(200);

          expect(body2.startTime).toBe(9 * 60 * 1000);
        });

        test('single day patch', async () => {
          const { body } = await request(app)
            .patch('/user/master/weekly-schedule')
            .set({ Authorization: 'Bearer ' + user.accessToken })
            .send({
              monday: false,
              tuesday: false,
              wednesday: false,
              thursday: false,
              friday: false,
              saturday: false,
              sunday: true,
            })
            .expect(200);

          expect(body.monday).toBe(false);
          expect(body.tuesday).toBe(false);
          expect(body.wednesday).toBe(false);
          expect(body.thursday).toBe(false);
          expect(body.friday).toBe(false);
          expect(body.saturday).toBe(false);
          expect(body.sunday).toBe(true);
        });
      });
    });
  });
});

