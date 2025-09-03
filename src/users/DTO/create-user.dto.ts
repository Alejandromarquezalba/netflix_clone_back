import { IsString, IsEmail, MinLength, MaxLength, Matches, IsOptional, IsEnum } from 'class-validator';
import { Transform } from 'class-transformer';
import { UserRole } from '@prisma/client';
import { IsAllowedEmailDomain } from './custom-email.decorator'; 

export class CreateUserDto {
    @IsString()
    @MinLength(3, { message: 'Mínimo 3 caracteres.' })
    @MaxLength(30, { message: 'Máximo 30 caracteres.' })
    name: string;

    @IsEmail({}, { message: 'Email inválido.' })
    @IsAllowedEmailDomain({ message: 'Dominio de correo no permitido.' })
    @Transform(({ value }) => value.trim().toLowerCase())
    email: string;

    @IsString()
    @MinLength(8, { message: 'Mínimo 8 caracteres.' })
    @Matches(/^(?!.*(admin|123456|password|qwerty|user|nombredeusuario))/i, {
        message: 'La contraseña es demasiado común o insegura',
    })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
        message: 'Debe tener 1 mayúscula, 1 minúscula y 1 número',
    })
    password: string; // se recibe aca sin

    @IsOptional()
    @IsEnum(UserRole)
    role?: UserRole;
}
/*
//regist
{
    "name": "sujetoDEPruebas",
    "email": "update@example.com",
    "password": "9876543210Ac"
}
//log
{
    "email": "otropass@example.com",
    "password": "197019701970xX"
}
*/