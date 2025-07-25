import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';
import { ConfigService } from '@nestjs/config';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService); //instalciacion del config

  app.use(cookieParser());

  app.enableCors({
    origin: configService.get<string>('FRONTEND_URL'), //conect con el front
    credentials: true,
  });

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,          
      forbidNonWhitelisted: true, 
      transform: true,          
      transformOptions: {
        enableImplicitConversion: true, 
      },
    }),
  );

  const port = configService.get<number>('PORT') || 3000; //lee port o 3000 por defaul
  await app.listen(port); //Nestjs escucha ese puerto

}
bootstrap();
