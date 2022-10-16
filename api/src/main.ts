import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

import { AppModule } from '@Src/app.module';
import { prisma } from '@Shared/services/prisma.service';
import { currenciesRaw } from '@Config/api/currency.config';

async function databaseSetup() {
  const currenciesCandidate = await prisma.currency.findMany();

  if (!currenciesCandidate) {
    await prisma.currency.createMany({
      data: currenciesRaw,
    });
  } else if (currenciesCandidate.length !== currenciesRaw.length) {
    if (currenciesCandidate.length < currenciesRaw.length) {
      for (const currency of currenciesRaw) {
        const candidate = await prisma.currency.findFirst({
          where: {
            code: currency.code,
          },
        });

        if (!candidate) {
          await prisma.currency.create({
            data: currency,
          });
        }
      }
    } else if (currenciesCandidate.length > currenciesRaw.length) {
      console.warn('There are extra currency');
    }
  }
}

async function start() {
  const PORT = process.env.API_PORT || 5000;
  const appOptions = { cors: true };
  const app = await NestFactory.create(AppModule, appOptions);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors();
  app.use(cookieParser());

  // Setup swagger
  const config = new DocumentBuilder()
    .setTitle('Alerki')
    .setDescription('Alerki API documentation')
    .setVersion('0.4.3')
    .addSecurity('Bearer', {
      type: 'http',
      scheme: 'Bearer',
    })
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await databaseSetup();

  await app.listen(PORT);
}

start();
