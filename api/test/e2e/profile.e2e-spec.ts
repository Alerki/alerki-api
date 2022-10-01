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

  const username = 'newOne';

  test('prepare', async () => {
    await request(app)
      .post('/auth/sign-up')
      .send({
        username,
        email: 'newOne12395@gmail.com',
        password: '12312313',
      })
      .expect(201);
  });

  describe('Regular script', () => {
    test('GET :username', async () => {
      const { body } = await request(app)
        .get('/profile/' + username)
        .expect(200);

      expect(body.username).toBe(username);
      expect(body.password).toBeUndefined();
      expect(body.masterProfile).toBeNull();
      expect(body.clientProfile).toBeTruthy();
      expect(body.clientProfile.id).toBeTruthy();
    });
  });

  describe('Other cases', () => {
    test('with not exist profile', async () => {
      await request(app)
        .get('/profile/not-exists-username')
        .expect(404);
    });
  });
});
