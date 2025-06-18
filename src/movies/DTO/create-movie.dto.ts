import { IsString, IsInt, IsUrl, IsArray, IsEnum, Min, Max, IsOptional, ValidateNested, MaxLength, MinLength} from 'class-validator';

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
    videoMetadata: VideoMetadataDto;
}