import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {



  const app = await NestFactory.create(AppModule);

    // 处理跨域
    app.enableCors();

  app.useGlobalPipes(new ValidationPipe())

  const options = new DocumentBuilder()
  .setTitle('我的博客')
  .setDescription('这是一个描述')
  .setVersion('1.0')

  .build();
const document = SwaggerModule.createDocument(app, options);
SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
