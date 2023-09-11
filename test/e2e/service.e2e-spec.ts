import { INestApplication, ValidationPipe } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import { Application } from 'express';
import * as request from 'supertest';

import { AppModule } from '../../src/app.module';
import { clearDatabaseUtil } from '../utils/clear-database.util';

describe('Service module testing', () => {
  let app: Application;
  let application: INestApplication;
  let prisma: PrismaClient;

  const serviceNames = [
    "man's haircut",
    "woman's haircut",
    "child's haircut",
    'shaving the beard',
    'hair painting',
  ];

  beforeAll(async () => {
    const moduleFixtures = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    application = await moduleFixtures
      .createNestApplication()
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

  describe('Regular usage script', () => {
    it('should get service with specified name', async () => {
      for (const name of serviceNames) {
        await prisma.service.create({ data: { name } });
      }

      const r = await request(app)
        .get('/service')
        .query({ name: 'hair' })
        .expect(200);

      expect(r.body).toHaveLength(4);
    });

    it('should get list of services', async () => {
      for (const name of serviceNames) {
        await prisma.service.create({ data: { name } });
      }

      const r = await request(app).get('/service').expect(200);

      expect(r.body).toHaveLength(5);
    });

    it('should return 404 code', async () => {
      const r = await request(app)
        .get('/service')
        .query({ name: 'not exits name' })
        .expect(404);

      expect(r.body.message).toBe('Services not exists');
    });
  });
});
