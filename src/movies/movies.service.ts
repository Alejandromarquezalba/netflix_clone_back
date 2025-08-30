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

        async findAll(query?: string): Promise<Movie[]> {
            let localMovies: Movie[] = [];
            let apiMovies: Movie[] = [];
            const allMovies: Movie[] = [];
            const movieIds = new Set<string>();
        
            //Obtener películas de la base de datos local
            localMovies = await this.prisma.movie.findMany({
                where: {
                    title: { contains: query, mode: 'insensitive' }
                }
            });
        
            //Obtener película de la API externa si hay una consulta
            if (query && query.length > 2) {
                // La API devuelve UN SOLO objeto de película, no un arreglo
                const apiResult = await this.movieApi.searchMovie(query);
                
                //verificamos si la respuesta existe y tiene un título
                if (apiResult && apiResult.Title) {
                    //formateamos el ÚNICO objeto de la API
                    const formattedMovie = {
                        id: apiResult.imdbID,
                        title: apiResult.Title,
                        description: apiResult.Plot || null,
                        releaseYear: parseInt(apiResult.Year),
                        coverUrl: apiResult.Poster,
                        genres: this.mapApiGenres(apiResult.Genre),
                        duration: this.parseDuration(apiResult.Runtime),
                        videoMetadata: {
                            imdbID: apiResult.imdbID,
                            rating: apiResult.imdbRating || 'N/A'
                        },
                        watchedBy: [], 
                        watchlist: [], 
                        addedAt: new Date()
                    };
                    apiMovies.push(formattedMovie);
                }
            }
            
            //fusionar ambas listas para evitar duplicados
            for (const movie of localMovies) {
                if (!movieIds.has(movie.id)) {
                    movieIds.add(movie.id);
                    allMovies.push(movie);
                }
            }
        
            for (const movie of apiMovies) {
                if (!movieIds.has(movie.id)) {
                    movieIds.add(movie.id);
                    allMovies.push(movie);
                }
            }
        
            return allMovies;
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


//watchlist para favoritos

    async getWatchlist(userId: string): Promise<string[]> {
        const userWithWatchlist = await this.prisma.user.findUnique({
        where: { id: userId },
        include: { 
            watchlist: {
            select: { id: true } // Solo los IDs
            } 
        },
        });
    
        if (!userWithWatchlist?.watchlist) {
        return [];
        }
    
        // Extrae solo los IDs
        return userWithWatchlist.watchlist.map(movie => movie.id);
    }

    async addMovieToWatchlist(userId: string, movieId: string) {
        await this.prisma.user.update({
            where: { id: userId },
            data: {
                watchlist: {
                connect: { id: movieId },
                },
            },
            });
            
            // Devuelve la watchlist ACTUALIZADA, no el usuario completo
            return this.getWatchlist(userId);
        }
        

    async removeMovieFromWatchlist(userId: string, movieId: string) {
            await this.prisma.user.update({
            where: { id: userId },
            data: {
                watchlist: {
                disconnect: { id: movieId },
                },
            },
            });
            
            // Devuelve la watchlist ACTUALIZADA, no el usuario completo
            return this.getWatchlist(userId);
    }


}