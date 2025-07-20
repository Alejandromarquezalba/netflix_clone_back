import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { PrismaModule } from './prisma/prisma.module';

import { AuthModule } from './auth/auth.module';

import { UsersModule} from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { PlansModule } from './plans/plans.module';
import { ProfilesModule } from './profiles/profiles.module';
import { MoviesModule } from './movies/movies.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { ConfigService } from '@nestjs/config';

import { APP_FILTER } from '@nestjs/core';
import { AllExceptionsFilter } from './common/filters/all-exceptions.filter';

@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true,
      envFilePath: '.env'
    }),
    UsersModule,
    PassportModule, 
    PrismaModule, 
    PlansModule, 
    ProfilesModule, 
    MoviesModule, 
    AuthModule],

  controllers: [AppController],
  providers: [AppService, {
    provide: APP_FILTER, //registro de mi filtro como global y permitir la inject
    useClass: AllExceptionsFilter,
  }], 
})


export class AppModule {}
