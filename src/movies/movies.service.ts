import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateMovieDto } from './DTO/update-movie.dto';
import { CreateMovieDto } from './DTO/create-movie.dto';
import { Movie } from '@prisma/client'; 

@Injectable()
export class MovieService {
    constructor(private prisma: PrismaService) {}

    //metodos para formatear los gen a string, evitar clones o espacios vacios
    private formatGenres(genres: string[]): string {
        if (!genres || genres.length === 0) return 'Sin género';
        return [...new Set(genres.map(g => g.trim()))].filter(g => g).join(', ');
    }
    

    async create(createMovieDto: CreateMovieDto): Promise<Movie> {
        return this.prisma.movie.create({
            data: {
                title: createMovieDto.title,
                description: createMovieDto.description,
                releaseYear: createMovieDto.releaseYear,
                genre: this.formatGenres(createMovieDto.genres), // <-- metodo de formatear está acá
                videoUrl: createMovieDto.videoMetadata.videoUrl,
                coverUrl: createMovieDto.coverUrl,  
                duration: createMovieDto.duration,                     
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
        return this.prisma.movie.update({
        where: { id },
        data: updateMovieDto,
        });
    }

    async remove(id: string) {
        return this.prisma.movie.delete({ where: { id } });
    }
}