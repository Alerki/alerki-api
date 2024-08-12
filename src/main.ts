import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';
import { ENV } from './modules/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
    }),
  );
  app.use(cookieParser());
  app.enableCors();

  // Swagger
  const config = new DocumentBuilder()
    .setTitle('Alerki API')
    .setDescription('Alerki API description')
    .setVersion('0.7.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app
    .listen(ENV.PORT)
    .then(() => console.log(`Nest started on http://localhost:${ENV.PORT}`));
}
bootstrap();
