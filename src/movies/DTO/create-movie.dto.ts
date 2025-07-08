import { IsString, IsInt, IsUrl, IsArray, IsEnum, Min, Max, IsOptional, ValidateNested, MaxLength, MinLength} from 'class-validator';
import { Type } from 'class-transformer';

//Generos
export enum MovieGenre {
    ACTION = 'Action',
    COMEDY = 'Comedy',
    DOCUMENTARY = 'Documentary',
}

export class VideoMetadataDto {
    @IsUrl()
    videoUrl: string;

    @IsOptional()
    @IsUrl()
    trailerUrl?: string;
    }

    export class CreateMovieDto {
    @IsString()
    @MinLength(1)
    @MaxLength(200)
    title: string;

    @IsOptional()
    @IsString()
    @MaxLength(1000)
    description?: string;

    @IsInt()
    @Min(1888)
    @Max(new Date().getFullYear() + 2)
    releaseYear: number;

    @IsArray()
    @IsEnum(MovieGenre, { each: true })
    genres: MovieGenre[];

    @ValidateNested()
    @Type(() => VideoMetadataDto) // <-- ¡Importante! Asegúrate de tener @Type aquí para anidar DTOs
    videoMetadata: VideoMetadataDto;

    @IsOptional() // Hacemos coverUrl opcional
    @IsString() // Y validamos que sea string si se envía
    coverUrl?: string = '/default-cover.jpg'; //miniatua de peli

    @IsOptional() //duration opcional
    @IsInt() //validamos que sea int si se envía
    @Min(1) //duración mínima de 1 minuto
    duration?: number; //tiempo cuando dura en min
}

/*
//ADMIN: creacuion
{
    "title": "nombre de peli",
    "releaseYear": año,
    "genres": ["Action", "Comedy"],
    "videoMetadata": {
        "videoUrl": "https://etc.mp4",
    }
}

//creacion con mas datos
{
    "title": "nombre peli completa + datos",
    "description": "descripcion de la hstoria",
    "releaseYear": 2024,
    "genres": ["Action", "Comedy"],
    "videoMetadata": {
        "videoUrl": "https://etc.mp4",
        "trailerUrl": "https://etc-trailer.mp4",
    },
    "coverUrl": "https://example.com/mi-portada-personalizada.jpg",
    "duration": 100
}
//La duracion 100 es en minutos
*/