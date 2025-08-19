import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
import * as bcrypt from 'bcrypt';
import { UserRole } from '@prisma/client';

//para la pass
import { ChangePasswordDto } from './DTO/change-pasword.dto';
import { NotFoundException, UnauthorizedException } from '@nestjs/common/exceptions';
import { compare, hash } from 'bcryptjs'; 

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async create(createUserDto: CreateUserDto) {
        //hasheo de la contraseña con bctyp
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    
        return this.prisma.user.create({
            data: {
                email: createUserDto.email,
                name: createUserDto.name,
                password: hashedPassword,
                role: UserRole.USER, // <---- VALOR POR DEFECTO del rol acá, el cual va a ser USER ponele
            }
        });
    }

    async findAll() {
        return this.prisma.user.findMany();
    }

    async findOne(id: string) {
        return this.prisma.user.findUnique({ where: { id } });
    }

    async update(id: string, updateUserDto: UpdateUserDto) {
        return this.prisma.user.update({
        where: { id },
        data: updateUserDto,
        });
    }

    async remove(id: string) {
        return this.prisma.user.delete({ where: { id } });
    }

    async findByEmail(email: string) {
            const user = await this.prisma.user.findUnique({
            where: { email },
            select: {
                id: true,
                email: true,
                name: true,
                password: true,
                role: true 
            }
            });
            
            return user;
        }

    async changePassword(userId: string, changePasswordDto: ChangePasswordDto) {
        //busca al usuario en la base d
        const user = await this.prisma.user.findUnique({ where: { id: userId } });
        if (!user) throw new NotFoundException('Usuario no encontrado');
    
        //vemos que la contraseña actual sea la misma
        const isPasswordValid = await compare(changePasswordDto.currentPassword, user.password);
        if (!isPasswordValid) throw new UnauthorizedException('Contraseña actual incorrecta');
    
        //creacion y hasheos de la nueva password
        const hashedPassword = await hash(changePasswordDto.newPassword, 10);
        return this.prisma.user.update({
            where: { id: userId },
            data: { password: hashedPassword },
        });
    }

}