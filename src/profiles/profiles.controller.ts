import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards, Req } from '@nestjs/common';
import { ProfileService } from './profiles.service';
import { CreateProfileDto } from './DTO/create-profile.dto';
import { UpdateProfileDto } from './DTO/update-profile.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { ForbiddenException } from '@nestjs/common/exceptions';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';

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

    @Get() 
    async getMyProfiles( 
    @Req() req: Request & { user: { id: string; role: UserRole } }
    ) {
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


    @Get('admin/profiles/:userId') //profile/admin/profiles/:userId
    @UseGuards(RolesGuard)
    @Roles(UserRole.ADMIN)
    findProfilesByUserIdAdmin(@Param('userId') userId: string) {
        return this.profileService.findByUserId(userId); // Este 'userId' es el ID del USUARIO
    }

    

    @Patch(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN) 
    update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
        return this.profileService.update(id, updateProfileDto);
    }

    @Delete(':id') // El ':id' en la URL le dice a NestJS que espere un ID en la ruta
    async remove(@Param('id') id: string, @Req() req: Request) {
    //extraer el id autenticado del TOKEN
    const authenticatedUserId = req.user.id as string; 
    //enviar los datos al servicio
    return this.profileService.remove(id, authenticatedUserId); 
    }
}

//CAMBIO DE GEMINI
/*
esto era de DEEP
@Get()
    @UseGuards(JwtAuthGuard, RolesGuard) 
    @Roles(UserRole.ADMIN)
    findAll() {
        return this.profileService.findAll();
    }
fue cambiado por: 

@Get() 
    async getMyProfiles( 
    @Req() req: Request & { user: { id: string; role: UserRole } }
    ) {
        return this.profileService.findByUserId(req.user.id);
    }


*/