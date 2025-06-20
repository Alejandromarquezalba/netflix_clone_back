import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from '../users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { JwtStrategy } from './jwt.strategy/jwt.strategy';
import { ConfigModule, ConfigService } from '@nestjs/config'; 

@Module({
  imports: [
    UsersModule, // El AuthModule necesita el UsersModule para validar usuarios
    PassportModule, // Necesario para que las estrategias de Passport funcionen
    JwtModule.registerAsync({ // <-- ¡REEMPLAZA el anterior JwtModule.register() con esto!
      imports: [], // Deja esto vacío si ConfigModule es global en AppModule
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'), // Obtiene la clave de .env
        signOptions: { expiresIn: configService.get<string>('JWT_EXPIRATION_TIME') || '60s' }, // Obtiene tiempo de .env
      }),
      inject: [ConfigService], // Le dice a Nest que inyecte ConfigService en useFactory
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy], // JwtStrategy debe ser un proveedor
  exports: [AuthService, JwtModule], // Exportamos AuthService y JwtModule si otros módulos lo necesitan
})

export class AuthModule {}