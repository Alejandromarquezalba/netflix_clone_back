import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import cookieParser from 'cookie-parser';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  app.enableCors({
    origin: 'http://tufrontend.com', 
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

  //filtro global para manejar excepciones
  app.useGlobalFilters(new AllExceptionsFilter());

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
