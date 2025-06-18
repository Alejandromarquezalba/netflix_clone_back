import { IsString, IsEmail, MinLength, MaxLength, Matches, IsOptional, IsEnum } from 'class-validator';

export enum UserRole {
    USER = 'USER',
    ADMIN = 'ADMIN',
    }

    export class CreateUserDto {
    @IsString()
    @MinLength(3, { message: 'Mínimo 3 caracteres.' })
    @MaxLength(30, { message: 'Máximo 30 caracteres.' })
    name: string;

    @IsEmail({}, { message: 'Email inválido.' })
    email: string;

    @IsString()
    @MinLength(8, { message: 'Mínimo 8 caracteres.' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
        message: 'La contraseña debe tener al menos 1 mayúscula, 1 minúscula y 1 número.',
    })
    password: string;

    @IsOptional()
    @IsEnum(UserRole)
    role?: UserRole = UserRole.USER; 
}