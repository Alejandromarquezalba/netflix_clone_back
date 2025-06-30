import { IsString, IsNumber, IsBoolean, IsOptional, IsEnum, Min, Max, MaxLength, MinLength, IsInt, IsNotEmpty
    } from 'class-validator';
    
    export enum PlanType {
        BASIC = 'BASIC',
        STANDARD = 'STANDARD',
        PREMIUM = 'PREMIUM',
        FAMILY = 'FAMILY'
    }
    
    export enum VideoQuality {
        SD = 'SD',      // esta es definicion estandar
        HD = 'HD',      // alta definicion
        FHD = 'FHD',    // definicion fullHD
        UHD = 'UHD'     // ultra hd 4k
    }
    
    export class CreatePlanDto {
        @IsString({ message: 'El nombre del plan es obligatorio' })
        @MinLength(3, { message: 'El nombre del plan debe tener al menos 3 caracteres' })
        @MaxLength(50, { message: 'El nombre del plan no puede exceder los 50 caracteres' })
        name: string;
    
        @IsOptional()
        @IsString({ message: 'La descripción debe ser texto' })
        @MaxLength(500, { message: 'La descripción no puede exceder los 500 caracteres' })
        description?: string;
    
        @IsNumber({ maxDecimalPlaces: 2 }, { message: 'El precio debe tener máximo 2 decimales' })
        @Min(0, { message: 'El precio no puede ser negativo' })
        @Max(99999.99, { message: 'El precio no puede exceder los $99,999.99' })
        price: number;
    
        @IsEnum(PlanType, { message: 'El tipo de plan debe ser BASIC, STANDARD, PREMIUM o FAMILY' })
        type: PlanType;
    
        @IsInt({ message: 'El número de pantallas debe ser un entero' })
        @Min(1, { message: 'Debe permitir al menos 1 pantalla' })
        @Max(10, { message: 'No puede exceder las 10 pantallas simultáneas' })
        maxScreens: number;
    
        @IsInt({ message: 'El número de perfiles debe ser un entero' })
        @Min(1, { message: 'Debe permitir al menos 1 perfil' })
        @Max(20, { message: 'No puede exceder los 20 perfiles' })
        maxProfiles: number;
    
        @IsEnum(VideoQuality, { message: 'La calidad máxima debe ser SD, HD, FHD o UHD' })
        maxVideoQuality: VideoQuality;
    
        @IsBoolean({ message: 'La descarga offline debe ser verdadero o falso' })
        allowDownloads: boolean;
    
        @IsBoolean({ message: 'Los anuncios deben ser verdadero o falso' })
        hasAds: boolean;
    
        @IsOptional()
        @IsInt({ message: 'Los días de prueba gratuita deben ser un entero' })
        @Min(0, { message: 'Los días de prueba no pueden ser negativos' })
        @Max(90, { message: 'Los días de prueba no pueden exceder los 90 días' })
        freeTrialDays?: number;
    
        @IsBoolean({ message: 'El estado activo debe ser verdadero o falso' })
        isActive: boolean = true;

        @IsString() 
        @IsNotEmpty()
        resolution: string; 
        
    }
