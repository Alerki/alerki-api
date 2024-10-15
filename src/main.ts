import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  DocumentBuilder,
  SwaggerDocumentOptions,
  SwaggerModule,
} from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';

import { AppModule } from './app.module';
import { ENV } from './modules/config';

async function bootstrap() {
  const logger = new Logger('NestApplication');

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: false,
      disableErrorMessages: false,
    }),
  );
  app.use(cookieParser());
  app.enableCors();

  // Swagger
  const swaggerOption: SwaggerDocumentOptions = {
    deepScanRoutes: true,
  };
  const config = new DocumentBuilder()
    .setTitle('Alerki API')
    .setDescription('Alerki API description')
    .addSecurity('Bearer', {
      type: 'http',
      scheme: 'Bearer',
    })
    .setVersion('0.7.0')
    .build();
  const document = SwaggerModule.createDocument(app, config, swaggerOption);
  SwaggerModule.setup('api', app, document);

  await app
    .listen(ENV.PORT)
    .then(() => logger.log(`http://localhost:${ENV.PORT}`));
}
bootstrap();
