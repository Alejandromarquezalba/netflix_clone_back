import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateMovieDto } from './DTO/update-movie.dto';
import { CreateMovieDto } from './DTO/create-movie.dto';
import { Movie } from '@prisma/client'; 
import { NotFoundException } from '@nestjs/common';
import { MovieApiService } from './api/movie-api.service';
import { MovieGenre } from '@prisma/client';

//import { OmdbService } from 'src/ombd/ombd.service';

@Injectable()
export class MovieService {
    constructor(private prisma: PrismaService
                ,private readonly movieApi: MovieApiService
                //, private readonly omdbService: OmdbService
    ) {}

    async create(createMovieDto: CreateMovieDto): Promise<Movie> {
        return this.prisma.movie.create({
            data: {
                title: createMovieDto.title,
                description: createMovieDto.description,
                releaseYear: createMovieDto.releaseYear,
                genres: createMovieDto.genres, // <-- metodo de formatear está acá
                videoMetadata: {
                    videoUrl: createMovieDto.videoMetadata.videoUrl,
                    trailerUrl: createMovieDto.videoMetadata.trailerUrl,
                    },
                coverUrl: createMovieDto.coverUrl || '/default-cover.jpg',
                duration: createMovieDto.duration || 90,                    
            },
            });

        }

    async findAll(page: number = 1, limit: number = 10): Promise<Movie[]> {
        return this.prisma.movie.findMany({
            skip: (page - 1) * limit,
            take: limit,
        });
    }

    async findOne(id: string) {
        return this.prisma.movie.findUnique({ where: { id } });
    }

    async update(id: string, updateMovieDto: UpdateMovieDto) {
    //construye el objeto de datos para la actualización explícitamente
    const data: any = {
        title: updateMovieDto.title,
        description: updateMovieDto.description,
        releaseYear: updateMovieDto.releaseYear,
        coverUrl: updateMovieDto.coverUrl,
        duration: updateMovieDto.duration,
        videoMetadata: updateMovieDto.videoMetadata, 
        };

        //manejo especial para el array 'genres' en la actualización
        if (updateMovieDto.genres !== undefined) {
        data.genres = { set: updateMovieDto.genres }; //prisma espera { set: [...] }
        }

        const updatedMovie = await this.prisma.movie.update({
        where: { id },
        data, //pasa el objeto 'data' construido
        });

        if (!updatedMovie) {
        throw new NotFoundException(`Movie with ID ${id} not found.`);
        }
        return updatedMovie;
    }

    async remove(id: string) {
        return this.prisma.movie.delete({ where: { id } });
    }

    /* 
    async enrichMovieData(title: string) {
        const omdbData = await this.omdbService.searchMoviesByTitle(title);
    }
    */

    async createWithExternalApi(title: string) {
            const apiData = await this.movieApi.searchMovie(title);
            
            return this.prisma.movie.create({
            data: {
                title: apiData.Title,
                description: apiData.Plot || null,
                releaseYear: parseInt(apiData.Year),
                genres: this.mapApiGenres(apiData.Genre || ''), 
                duration: this.parseDuration(apiData.Runtime || ''), 
                coverUrl: apiData.Poster,
                videoMetadata: {
                imdbId: apiData.imdbID,
                rating: apiData.imdbRating || 'N/A' //si no hay rating, uso valor por defecto n/a
                }
            }
            });
        }
        
    private parseDuration(runtime: string | undefined): number | null {
            if (!runtime) return null;
            
            const minutes = runtime.match(/\d+/);
            return minutes ? parseInt(minutes[0]) : null;
    }
        
    private mapApiGenres(genreString: string): MovieGenre[] {
        const genreMap: Record<string, MovieGenre> = {
        'Action': 'ACTION',
        'Comedy': 'COMEDY',
        'Documentary': 'DOCUMENTARY'
        };
    
        return genreString?.split(', ')
        .map(genre => genreMap[genre.trim()])
        .filter((genre): genre is MovieGenre => !!genre) || [];
    }


    // Método para buscar en OMDB
    async searchFromAPI(title: string) {
        return this.movieApi.searchMovie(title);
    }

}