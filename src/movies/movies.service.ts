import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateMovieDto } from './DTO/update-movie.dto';
import { CreateMovieDto } from './DTO/create-movie.dto';
import { Movie } from '@prisma/client'; 
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class MovieService {
    constructor(private prisma: PrismaService) {}

    /* 
    private formatGenres(genres: string[]): string {
        if (!genres || genres.length === 0) return 'Sin género';
        return [...new Set(genres.map(g => g.trim()))].filter(g => g).join(', ');
    }
    */

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
    // Construye el objeto de datos para la actualización explícitamente
    const data: any = {
        title: updateMovieDto.title,
        description: updateMovieDto.description,
        releaseYear: updateMovieDto.releaseYear,
        coverUrl: updateMovieDto.coverUrl,
        duration: updateMovieDto.duration,
        videoMetadata: updateMovieDto.videoMetadata, // Directamente si es un objeto completo
        };

        // Manejo especial para el array 'genres' en la actualización
        if (updateMovieDto.genres !== undefined) {
        data.genres = { set: updateMovieDto.genres }; // Prisma espera { set: [...] }
        }

        const updatedMovie = await this.prisma.movie.update({
        where: { id },
        data, // Pasa el objeto 'data' construido
        });

        if (!updatedMovie) {
        throw new NotFoundException(`Movie with ID ${id} not found.`);
        }
        return updatedMovie;
    }

    async remove(id: string) {
        return this.prisma.movie.delete({ where: { id } });
    }
}