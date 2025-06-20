import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule} from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { PlansModule } from './plans/plans.module';
import { ProfilesModule } from './profiles/profiles.module';
import { MoviesModule } from './movies/movies.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';


@Module({
  imports: [
    ConfigModule.forRoot({ 
      isGlobal: true,
    }),

    UsersModule,
    PassportModule, 
    JwtModule.registerAsync({
      imports: [],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: {
          expiresIn: configService.get<string>('JWT_EXPIRATION_TIME') || '60s'
        },
      }),
      inject: [ConfigService],
    }),
    UsersModule, PrismaModule, PlansModule, ProfilesModule, MoviesModule, AuthModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})


export class AppModule {}
