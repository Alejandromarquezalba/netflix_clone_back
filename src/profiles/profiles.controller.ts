import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards, Req } from '@nestjs/common';
import { ProfileService } from './profiles.service';
import { CreateProfileDto } from './DTO/create-profile.dto';
import { UpdateProfileDto } from './DTO/update-profile.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
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
    findAll() {
        return this.profileService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.profileService.findOne(id);
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