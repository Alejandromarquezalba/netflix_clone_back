import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/users/users.service';
import { InternalServerErrorException } from '@nestjs/common/exceptions/internal-server-error.exception';
import { UserRole } from '@prisma/client';
import { Request } from 'express'; 

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
            jwtFromRequest: ExtractJwt.fromExtractors([
                (req: Request) => {
                  //1-Buscar primero en primero en Headers (NextAuth)
                    const authHeader = req.headers.authorization;
                    if (authHeader && authHeader.startsWith('Bearer ')) {
                        console.log('✅ Token encontrado en headers');
                        return authHeader.substring(7); // Extrae "Bearer "
                    }
                
                    //2-Luego busca en cookies (otras peticiones)
                    if (req?.cookies?.['token']) {
                        console.log('✅ Token encontrado en cookies');
                        return req.cookies['token'];
                    }
                
                    console.log('❌ Token no encontrado en headers ni cookies');
                    return null;
                    }
                ]),
        ignoreExpiration: false,
        secretOrKey: secret,
        

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
