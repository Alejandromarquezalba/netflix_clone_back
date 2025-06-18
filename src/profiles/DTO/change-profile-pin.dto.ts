import { IsString, IsEnum, IsNumber, IsOptional, MinLength, MaxLength, IsBoolean } from 'class-validator';

export class ChangeProfilePinDto {
        @IsOptional()
        @IsString({ message: 'El PIN actual debe ser texto' })
        currentPin?: string;
    
        @IsString({ message: 'El nuevo PIN es obligatorio' })
        @MinLength(4, { message: 'El PIN debe tener al menos 4 caracteres' })
        @MaxLength(6, { message: 'El PIN no puede exceder los 6 caracteres' })
        newPin: string;
    }