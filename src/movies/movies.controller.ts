
import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards  } from '@nestjs/common';
import { MovieService } from './movies.service';
import { CreateMovieDto } from './DTO/create-movie.dto';
import { BadRequestException, Query } from '@nestjs/common';
import { MovieApiService } from './api/movie-api.service';

import { UpdateMovieDto } from './DTO/update-movie.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
//seguridad
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/auth/decorators/roles.decorator';

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
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN) 
    update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
        return this.movieService.update(id, updateMovieDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN) 
    remove(@Param('id') id: string) {
        return this.movieService.remove(id);
    }


    @Get('api/search') //protegido para que no me gasten lso 1000 requests diarios
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    async searchOMDB(@Query('title') title: string) {
        if (!title) throw new BadRequestException('Se requiere Titulos');
        return this.movieService.searchFromAPI(title);
    }

    // Endpoint NUEVO para crear desde OMDB (solo admin)
    @Post('api/import')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)
    async importFromOMDB(@Body() { title }: { title: string }) {
        return this.movieService.createWithExternalApi(title);
    }
        

}