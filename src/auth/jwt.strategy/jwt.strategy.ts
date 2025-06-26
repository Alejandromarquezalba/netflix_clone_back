import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { UserService } from 'src/users/users.service';
import { InternalServerErrorException } from '@nestjs/common/exceptions/internal-server-error.exception';

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

    async validate(payload: any) {

        const user = await this.userService.findOne(payload.sub); 
        if (!user) {
        throw new UnauthorizedException(); 
        }

        return { userId: user.id, email: user.email, roles: user.role }; 
    }
}
