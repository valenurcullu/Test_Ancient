import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api/v1");
//es para validar de forma global los datos de entrada
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, //que tire error si nos mandan datos que no crrespondan
      forbidNonWhitelisted: true,
      transform: true,// trata de transofrmar de string a number o asi depende lo que le pidamos
    })
  );
  await app.listen(3000);
}
bootstrap();
