import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as cookieParser from 'cookie-parser';
import * as request from 'supertest';
import { set } from 'date-fns';

import { AppModule } from '@Src/app.module';
import getCookies from '@Test/util/get-cookies';
import { Application } from 'express';
import { GoogleStrategy } from '@Module/auth/google.strategy';
import { start } from '@Test/util/google-oauth-mock';

describe('UserController (e2e)', () => {
  let app: Application;
  let googleOAuthMockPort = 3010;
  let googleOAuthMockServer: any;
  let googleOAuthMockConfig: Record<string, any> = {};
  let application: INestApplication;

  let googleStrategy: GoogleStrategy;

  const user = {
    username: 'some12319',
    email: 'some12319@example.com',
    password: '123123',
    refreshToken: '',
    accessToken: '',
  };

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

    googleOAuthMockConfig.profile.email = user.email;
  });

  afterAll(async () => {
    await application.close();
    await googleOAuthMockServer.close();
  });

  test('prepare', async () => {
    const r = await request(app)
      // eslint-disable-next-line max-len
      .get('/auth/google/callback?code=4%2F0ARtbsJoDtkvaW23Qx7efq2uEhL405ean9kPadiNsUp0TyRHJm35j7AbD0AsEDmmIw0PFUw&scope=email+profile+openid+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile&authuser=0&prompt=none')
      .expect(200);

    const cookies = getCookies(r);

    user.refreshToken = cookies.refreshToken.value;
    user.accessToken = r.body.accessToken;
  });

  describe('Regular script', () => {
    let pictureId: string;

    test('GET :username', async () => {
      const { body } = await request(app)
        .get('/user/' + user.username)
        .expect(200);

      pictureId = body.pictureId;

      expect(body.username).toBe(user.username);
      expect(body.password).toBeUndefined();
      expect(body.masterProfile).toBeNull();
      expect(body.clientProfile).toBeTruthy();
      expect(body.clientProfile.id).toBeTruthy();
    });

    test('GET /', async () => {
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

    test('GET picture', async () => {
      await request(app)
        .get('/user/picture')
        .expect(401);

      const { body } = await request(app)
        .get('/user/picture')
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(200);

      expect(body).toBeTruthy();
    });

    test('GET picture/:id', async () => {
      const { body } = await request(app)
        .get('/user/picture/' + pictureId)
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(200);

      expect(body).toBeTruthy();
    });

    it('enable master profile', async () => {
      // Prepare user
      await request(app)
        .patch('/profile/enable-master')
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(200);
    });

    describe('master service', () => {
      test('POST create service', async () => {
        await request(app)
          .post('/user/master/service')
          .expect(401);

        const r = await request(app)
          .post('/user/master/service')
          .set({ Authorization: 'Bearer ' + user.accessToken })
          .send({
            name: 'man haircut',
            price: 100,
            currency: 'UAH',
            duration: 60 * 10,
            locationLat: 1.1,
            locationLng: 1.2,
          })
          .expect(201);

        const mastersService = await prisma.masterService.findMany();

        expect(mastersService).toHaveLength(1);

        const masterService = mastersService[0];

        const service = await prisma.service.findFirst({
          where: {
            id: masterService.serviceId,
          },
        });

        expect(service).toBeDefined();
        expect(service.name).toBe('man haircut');
        expect(masterService.price).toBe(100);
        expect(masterService.duration).toBe(600);
        expect(masterService.locationLat).toBe(1.1);
        expect(masterService.locationLng).toBe(1.2);

        expect(r.body.price).toBe(100);
        expect(r.body.duration).toBe(600);
        expect(r.body.locationLat).toBe(1.1);
        expect(r.body.locationLng).toBe(1.2);
      });
    });

    test('GET own service', async () => {
      await request(app)
        .get('/user/master/service')
        .expect(401);

      const { body } = await request(app)
        .get('/user/master/service')
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(200);

      expect(body).toHaveLength(1);
    });

    test('GET service by id', async () => {
      const User = await prisma.user.findFirst({
        where: {
          username: user.username,
        },
      });

      const { body } = await request(app)
        .get(`/user/master/${User.masterProfileId}/service`)
        .expect(200);

      expect(body).toHaveLength(1);
    });

    test('PATCH update service', async () => {

    });

    test('DELETE service', async () => {

    });
  });

  describe('Other cases', () => {
    test('with not exist username', async () => {
      await request(app)
        .get('/user/not-exists-username')
        .expect(404);
    });

    test('with bad picture ID', async () => {
      const { body } = await request(app)
        .get('/user/picture/bad-picture-id')
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(400);

      expect(body).toBeTruthy();
    });

    test('with not exists picture ID', async () => {
      const { body } = await request(app)
        .get('/user/picture/f0ef45ea-59ed-4fe9-afe3-95dc8303dac6')
        .set({ Authorization: 'Bearer ' + user.accessToken })
        .expect(404);

      expect(body).toBeTruthy();
    });
  });
});
