import { IsString, IsOptional, IsBoolean, IsEnum, IsInt, MaxLength, MinLength, Min, Max, IsUrl } from 'class-validator';
    
    export enum ProfileType {
        ADULT = 'ADULT',
        CHILD = 'CHILD'
    }
    
    export enum AgeRating {
        ALL = 'ALL',        // Todo público
        KIDS = 'KIDS',      // Solo contenido infantil
        TEEN = 'TEEN',      // Hasta 13 años
        MATURE = 'MATURE'   // Sin restricciones
    }
    
    export class CreateProfileDto {
        @IsString({ message: 'El nombre del perfil es obligatorio' })
        @MinLength(1, { message: 'El nombre del perfil no puede estar vacío' })
        @MaxLength(30, { message: 'El nombre del perfil no puede exceder los 30 caracteres' })
        name: string;
    
        @IsOptional()
        @IsUrl({}, { message: 'La URL del avatar debe ser válida' })
        @MaxLength(500, { message: 'La URL del avatar no puede exceder los 500 caracteres' })
        avatarUrl?: string;
    
        @IsEnum(ProfileType, { message: 'El tipo de perfil debe ser ADULT o CHILD' })
        type: ProfileType;
    
        @IsEnum(AgeRating, { message: 'La restricción de edad debe ser ALL, KIDS, TEEN o MATURE' })
        ageRestriction: AgeRating;
    
        @IsOptional()
        @IsString({ message: 'El idioma preferido debe ser texto' })
        @MaxLength(10, { message: 'El código de idioma no puede exceder los 10 caracteres' })
        preferredLanguage?: string;
    
        @IsBoolean({ message: 'La reproducción automática debe ser verdadero o falso' })
        autoPlay: boolean = true;
    
        @IsBoolean({ message: 'El PIN debe ser verdadero o falso' })
        hasPin: boolean = false;
    
        @IsOptional()
        @IsString({ message: 'El PIN debe ser texto' })
        @MinLength(4, { message: 'El PIN debe tener al menos 4 caracteres' })
        @MaxLength(6, { message: 'El PIN no puede exceder los 6 caracteres' })
        pin?: string;
    
        @IsInt({ message: 'El ID del usuario debe ser un entero' })
        @Min(1, { message: 'El ID del usuario debe ser válido' })
        userId: string;
    }