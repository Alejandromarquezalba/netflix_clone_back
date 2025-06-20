import { IsEmail, IsString } from 'class-validator';

export class LoginUserDto {
    @IsEmail({}, { message: 'El formato del email no es válido.' })
    email: string;

    @IsString({ message: 'La contraseña es obligatoria.' })
    password: string;
}