
import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards, Request } from '@nestjs/common';
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
        @UseGuards(JwtAuthGuard, RolesGuard) 
        @Roles(UserRole.ADMIN) 
        async create(@Body() createMovieDto: CreateMovieDto) {
            return this.movieService.create(createMovieDto);
        }

    @Get()
        async findAll(@Query('query') query?: string) {

            return this.movieService.findAll(query);
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


//WATCLIST PARA FAVORITOS 

    @Get('watchlist')
    @UseGuards(JwtAuthGuard)
    async getWatchlist(@Request() req: any) {
        const userId = req.user.id;
        const watchlist = await this.movieService.getWatchlist(userId);
        
        // DEBUG FINAL
        console.log("✅ Controller devolviendo:", {
            type: typeof watchlist,
            isArray: Array.isArray(watchlist),
            value: watchlist
        });
        
        return watchlist;
    }

    @Post(':movieId/watchlist')
    @UseGuards(JwtAuthGuard)
    async addMovieToWatchlist(@Request() req: any, @Param('movieId') movieId: string) {
        const userId = req.user.id;
        return this.movieService.addMovieToWatchlist(userId, movieId);
    }

    @Delete(':movieId/watchlist')
    @UseGuards(JwtAuthGuard) 
    async removeMovieFromWatchlist(@Request() req: any, @Param('movieId') movieId: string) {
        const userId = req.user.id;
        return this.movieService.removeMovieFromWatchlist(userId, movieId);
    }

}