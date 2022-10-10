import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as cookieParser from 'cookie-parser';
import * as request from 'supertest';

import { AppModule } from '@Src/app.module';
import getCookies from '@Test/util/get-cookies';

describe('UserController (e2e)', () => {
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

  const user = {
    username: 'newOne',
    email: 'some12319@example.com',
    password: '123123',
    refreshToken: '',
    accessToken: '',
  };

  test('prepare', async () => {
    await request(app)
      .post('/auth/sign-up')
      .send(user)
      .expect(201);

    const r = await request(app)
      .post('/auth/sign-in')
      .send(user)
      .expect(200);

    const cookies = getCookies(r);

    user.refreshToken = cookies.refreshToken.value;
    user.accessToken = r.body.accessToken;
  });

  describe('Regular script', () => {
    test('GET :username', async () => {
      const { body } = await request(app)
        .get('/user/' + user.username)
        .expect(200);

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
  });

  describe('Other cases', () => {
    test('with not exist username', async () => {
      await request(app)
        .get('/user/not-exists-username')
        .expect(404);
    });
  });
});
