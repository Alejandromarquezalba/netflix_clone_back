import { IsString, MinLength, MaxLength, Matches } from 'class-validator';

export class ChangePasswordDto {
    @IsString({ message: 'La contraseña actual es obligatoria.' })
    currentPassword: string;

    @IsString()
    @MinLength(8, { message: 'Mínimo 8 caracteres.' })
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
        message: 'Debe contener 1 mayúscula, 1 minúscula y 1 número.',
    })
    newPassword: string;
}