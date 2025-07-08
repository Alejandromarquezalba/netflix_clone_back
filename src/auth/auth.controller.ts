import { Controller, Post, Body, HttpCode, HttpStatus, Request, UseGuards, Res} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/DTO/create-user.dto';

import { LoginUserDto } from './DTO/login-user.dto';

import { UserService } from 'src/users/users.service'; 

import { AuthGuard } from '@nestjs/passport'; 
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService, 
        private usersService: UserService
    ) {} 

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        const { user, access_token } = await this.authService.register(createUserDto); 
        return { 
            message: 'Usuario registrado exitosamente', 
            user: { id: user.id, email: user.email } 
        };
    }

    @Post('login')
    @HttpCode(HttpStatus.OK)
    async login(
        @Body() loginUserDto: LoginUserDto,
        @Res({ passthrough: true }) res: Response, // Necesario para manipular cookies
    ) {
        const { access_token, user } = await this.authService.validateUser(
            loginUserDto.email, 
            loginUserDto.password
        );

        //Configuración segura de la cookie
        res.cookie('token', access_token, {
            httpOnly: true, // No accesible desde JS
            secure: process.env.NODE_ENV === 'production', //solo HTTPS en producción
            sameSite: 'strict', //protección contra CSRF
            maxAge: 3600000, // 1 hora de vida
            path: '/', //disponible en todas las rutas
        });

        return { user }; //devuelve el usuario sin el token (ya está en la cookie)
    }
}

/*
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService, private usersService: UserService) {} 

    @Post('register')
    async register(@Body() createUserDto: CreateUserDto) {
        const { user, access_token } = await this.authService.register(createUserDto); 
        return { message: 'Usuario registrado exitosamente', user: { id: user.id, email: user.email }, access_token };
    }


    @HttpCode(HttpStatus.OK)


    @Post('login')
    async login(@Body() loginUserDto: LoginUserDto) {
        return this.authService.validateUser(loginUserDto.email, loginUserDto.password);
    }
}
    */