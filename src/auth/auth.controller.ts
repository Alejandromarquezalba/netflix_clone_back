import { Controller, Post, Body, HttpCode, HttpStatus, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/users/DTO/create-user.dto';

import { LoginUserDto } from './DTO/login-user.dto';

import { UserService } from 'src/users/users.service'; 

import { AuthGuard } from '@nestjs/passport'; 



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