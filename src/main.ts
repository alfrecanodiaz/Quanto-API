import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);

  const documentConfig = new DocumentBuilder()
    .setTitle('Quanto NestJS API')
    .setDescription(
      'Write a REST API for transactions and users, using a local mongodb database',
    )
    .setVersion('1.0')
    .addTag('quanto')
    .build();
  const document = SwaggerModule.createDocument(app, documentConfig);
  SwaggerModule.setup('api', app, document);

  await app.listen(config.get<number>('port'));
}

bootstrap();
