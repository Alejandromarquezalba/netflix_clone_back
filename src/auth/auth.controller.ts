import { Controller, Post, Body, HttpCode, HttpStatus, Request, UseGuards, Res} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/DTO/create-user.dto';

import { LoginUserDto } from './DTO/login-user.dto';

import { UserService } from 'src/users/users.service'; 

import { AuthGuard } from '@nestjs/passport'; 
import { Response } from 'express';
import { NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';


@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService, 
        private usersService: UserService,
        private readonly jwtService: JwtService,
    ) {} 

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        const { user, access_token } = await this.authService.register(createUserDto); 
        return { 
            message: 'Usuario registrado exitosamente', 
            user: { email: user.email } 
        };
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(
        @Body() loginUserDto: LoginUserDto,
        @Res({ passthrough: true }) res: Response, //Esto es ecesario para manipular cookies
    ) {
        const { access_token, user } = await this.authService.validateUser(
            loginUserDto.email, 
            loginUserDto.password
        );

        // Configuración de cookie
        res.cookie('token', access_token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', //*solo HTTPS en producción, esta linea ya me sirve de forma ingeligente para dejar ''apagado'' el SECURE con FALSE para que se puedan hacer HTTP en desarrollo y para que se ''prenda'' con SECURE true para cuando sea produccion.
            sameSite: 'strict', //protección contra CSRF
            maxAge: 3600000, // 1 hora de vida
            path: '/', //disponible en todas las rutas
        });

        return {
            access_token,
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                role: user.role //Asegurate de incluir esto
            } //devuelve el usuario sin el token (ya está en la cookie)
        };
    }


    //solo para la cuenta demo
    @Post('demo-login')
    async demoLogin() {
        const demoUser = await this.usersService.findByEmail('NewDemo@gmail.com');

        if (!demoUser) {
            throw new NotFoundException('Cuenta demo no configurada');
        }
        // Generar token JWT manualmente
        const payload = { 
            email: demoUser.email, 
            sub: demoUser.id, 
            role: demoUser.role 
        };

        return {
            access_token: this.jwtService.sign(payload),
            user: {
                id: demoUser.id,
                email: demoUser.email,
                name: demoUser.name
            }
        };
    }
} 

