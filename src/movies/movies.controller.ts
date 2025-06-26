
import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards  } from '@nestjs/common';
import { MovieService } from './movies.service';
import { CreateMovieDto } from './DTO/create-movie.dto';
import { Roles } from '../auth/decorators/roles.decorator'; // Importa tu decorador Roles
import { UserRole } from '@prisma/client';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { UpdateMovieDto } from './DTO/update-movie.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('movies')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @Post()
        @UseGuards(JwtAuthGuard, RolesGuard) // Primero JWT Guard, luego Roles Guard
        @Roles(UserRole.ADMIN) // Solo los usuarios con rol ADMIN pueden acceder a este endpoint
        async create(@Body() createMovieDto: CreateMovieDto) {
            return this.movieService.create(createMovieDto);
        }

    @Get()
    findAll() {
        return this.movieService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.movieService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
        return this.movieService.update(id, updateMovieDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.movieService.remove(id);
    }

}