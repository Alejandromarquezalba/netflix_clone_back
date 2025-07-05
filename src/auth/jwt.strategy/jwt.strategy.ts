import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/users/users.service';
import { InternalServerErrorException } from '@nestjs/common/exceptions/internal-server-error.exception';
import { UserRole } from '@prisma/client'; // Asegúrate de que UserRole esté importado correctamente

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor(private userService: UserService,
                private configService: ConfigService,
    ) {
        const secret = configService.get<string>('JWT_SECRET');
    if (!secret) {
        throw new InternalServerErrorException('JWT_SECRET environment variable is not defined.');
        }
        super({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        ignoreExpiration: false,
        secretOrKey: secret, // Usa la variable 'secret' que ya validamos
        });
    }

    async validate(payload: { email: string; sub: string; role: UserRole }) { // Mejor tipado del payload
        const user = await this.userService.findByEmail(payload.email); // O findOne(payload.sub) si usas el ID
        if (!user) {
            throw new UnauthorizedException();
        }
        // ---> El punto clave de diferencia aquí <---
        // Passport/NestJS adjuntará EXACTAMENTE lo que devuelve 'validate' a 'request.user'
        return user; // Devuelve el objeto completo del usuario de Prisma
    }
}
