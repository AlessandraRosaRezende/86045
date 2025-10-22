import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, OpenAPIObject, SwaggerModule } from '@nestjs/swagger';
import { json, urlencoded } from 'express';
import { INestApplication } from '@nestjs/common';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);

  app.use(json({ limit: '50mb' })); // Configure o limite do json
  app.use(urlencoded({ extended: true, limit: '50mb' })); // Configure o limite do urlencoded

  const config = new DocumentBuilder()
    .setTitle('API Example')
    .setDescription('API for managing users and products')
    .setVersion('1.0')
    .addTag('Products')
    .addTag('Users')
    .build();

  const document: OpenAPIObject = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/docs/api', app, document, {
    swaggerOptions: {
      docExpansion: 'none',
      filter: true,
      showRequestDuration: true,
    },
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
