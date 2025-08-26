import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards, Req } from '@nestjs/common';
import { ProfileService } from './profiles.service';
import { CreateProfileDto } from './DTO/create-profile.dto';
import { UpdateProfileDto } from './DTO/update-profile.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { Query } from '@nestjs/common/decorators/http/route-params.decorator';

//seguridad
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/auth/decorators/roles.decorator';

import { Request } from 'express'; // Asegúrate de importar Request desde express

@Controller('profile') 
@UseGuards(JwtAuthGuard)
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @Post()
    async create(@Body() createProfileDto: CreateProfileDto, @Req() req: Request) {
      //Usa 'id' porque tu modelo User de Prisma tiene 'id' como el identificador
        const authenticatedUserId = req.user.id as string;
        return this.profileService.create(createProfileDto, authenticatedUserId);
    }

    /* viejo get que se usaba antes de querer mostrar los perfiles de usuarios en el front.
    @Get() 
    async getMyProfiles( 
    @Req() req: Request & { user: { id: string; role: UserRole } }
    ) {
        return this.profileService.findByUserId(req.user.id);
    }
    */

    @Get()
    async getMyProfiles(
        @Req() req: Request & { user: { id: string; role: UserRole } },
        @Query('userId') userId?: string  
    ) {

        if (userId && req.user.role === UserRole.ADMIN) {
            return this.profileService.findByUserId(userId);
        }

        return this.profileService.findByUserId(req.user.id);
    }
    
    @Get(':id')
    async findOne(
        @Param('id') id: string,
        @Req() req: Request & { user: { id: string, role: UserRole } }
    ) {
        const profile = await this.profileService.findOne(id);
        //verificamo si existe
            if (!profile) {
                throw new NotFoundException('Perfil no encontrado');
            }
            //vrifica la titularidad el usuario o si es dueño del recuerdo al que quiere acceder
            if (req.user.role !== UserRole.ADMIN && profile.userId !== req.user.id) {
                throw new ForbiddenException('No tienes permiso para ver este perfil');
            }
        return profile;
    }

    @Get('admin/profiles') 
    @UseGuards(RolesGuard)
    @Roles(UserRole.ADMIN)
    findAllAdmin() { 
        return this.profileService.findAll(); 
    }


    @Get('admin/profiles/:userId')
    @UseGuards(RolesGuard)
    @Roles(UserRole.ADMIN)
    findProfilesByUserIdAdmin(@Param('userId') userId: string) {
        return this.profileService.findByUserId(userId); // Este 'userId' es el ID del USUARIO
    }

    

    @Patch(':id')
    @UseGuards(JwtAuthGuard)

    update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
        return this.profileService.update(id, updateProfileDto);
    }

    @Delete(':id') 
    async remove(@Param('id') id: string, @Req() req: Request & { user: { id: string; role: UserRole } }
    ) {
        //extraer el id autenticado del TOKEN
        const authenticatedUserId = req.user.id as string; 
        const userRole = req.user.role; //saco el rol del usuario pa'ver

        //pasa el ID del perfil, el ID del usuario autenticado Y su rol al servicio
        return this.profileService.remove(id, authenticatedUserId, userRole); 
    }
    
}

