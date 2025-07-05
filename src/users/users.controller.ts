import { Controller, Get, Post, Body, Param, Delete, Patch, UseGuards } from '@nestjs/common';

import { User } from '@prisma/client';
import { GetUser } from 'src/auth/decorators/get-user.decorator';
import { ForbiddenException } from '@nestjs/common/exceptions';


import { UserService } from './users.service';

import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';

import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
//seguridad
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/auth/decorators/roles.decorator';
@Controller('user') //
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN) //permiso para crear usuario, por admin
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }

    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN) 
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    @UseGuards(JwtAuthGuard, RolesGuard) 
    @Roles(UserRole.USER, UserRole.ADMIN) 
    async findOne(@Param('id') id: string, @GetUser() user: User) {
        if (user.role === UserRole.USER && user.id !== id) {  
            throw new ForbiddenException('No tienes permiso para ver este perfil.');
        }
        return this.userService.findOne(id);
    }


    @Patch(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.USER, UserRole.ADMIN)
    async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto, @GetUser() user: User) {
        if (user.role === UserRole.USER) {
            //para que el tipo no le cambie a otro usuario
            if (user.id !== id) {
                throw new ForbiddenException('No tienes permiso para modificar este usuario');
            } //para que no se pase de pillo y se cambie el rol a Admin
            if (updateUserDto.role) { 
                throw new ForbiddenException('No tienes permiso para cambiar tu rol');
            }
            
            const filteredDto: Partial<UpdateUserDto> = { ...updateUserDto };
            delete filteredDto.role; 
            return this.userService.update(id, filteredDto);
        }
        //solo admin puede actualizar perfil y cualquier campo (incluido el rol)
        return this.userService.update(id, updateUserDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN) 
    remove(@Param('id') id: string) {
        return this.userService.remove(id);
    }
}