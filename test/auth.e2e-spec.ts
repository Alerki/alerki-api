import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import * as cookieParser from 'cookie-parser';
import type { Application } from 'express';
import * as request from 'supertest';

import { AppModule } from '../src/app.module';
import { AuthModule } from '../src/auth/auth.module';
import { AuthService } from '../src/auth/services/auth.service';
import { AuthModuleService } from '../src/auth/services/auth-module.service';
import { UserActions } from './utils/actions.util';
import { clearDatabaseUtil } from './utils/clear-database.util';

describe('Auth module testing', () => {
  let app: Application;
  let application: INestApplication;
  let prisma: PrismaClient;

  let authModuleService: AuthModuleService;
  let authService: AuthService;

  beforeAll(async () => {
    const moduleFixtures = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    authModuleService =
      moduleFixtures.get<AuthModuleService>(AuthModuleService);
    authService = moduleFixtures.get<AuthService>(AuthService);

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

      const r = await request(app)
        .post('/auth/register')
        .send(user.credentials)
        .expect(201);

      const usersAfter = await prisma.user.findMany({});

      expect(usersAfter).toHaveLength(1);

      expect(usersAfter[0].email).toBe(user.email);
      expect(usersAfter[0].username).toBe(user.username);
      expect(usersAfter[0].password).toBeDefined();
    });
  });
});
