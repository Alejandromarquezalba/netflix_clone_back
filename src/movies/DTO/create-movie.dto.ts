import { IsString, IsInt, IsUrl, IsArray, IsEnum, Min, Max, IsOptional, ValidateNested, MaxLength, MinLength} from 'class-validator';
import { Type } from 'class-transformer';
import { MovieGenre } from '@prisma/client';

//Generos


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
    @IsEnum(MovieGenre, { each: true, message: 'Cada genero debe ser valido.' })
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
    "title": "Titulo",
    "releaseYear": 2025,
    "genres": ["ACTION"], 
    "videoMetadata": {
        "videoUrl": "https://url.minima.com/video.mp4"
    }
}

//creacion con mas datos
{
    "title": "Titulo completo",
    "description": "Una emocionante historia sobre un desarrollador que descubre los secretos de la Matrix.",
    "releaseYear": 2024,
    "genres": ["ACTION", "COMEDY"], // <-- ¡Cambia aquí a géneros válidos!
    "videoMetadata": {
        "videoUrl": "https://miplataforma.com/videos/gran_aventura.mp4",
        "trailerUrl": "https://miplataforma.com/trailers/gran_aventura_trailer.mp4"
    },
    "coverUrl": "https://miplataforma.com/covers/gran_aventura_cover.jpg",
    "duration": 150
}
//La duracion 100 es en minutos
*/