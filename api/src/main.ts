import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

import { AppModule } from '@Src/app.module';
import { databaseSetup } from '@Src/util';

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
