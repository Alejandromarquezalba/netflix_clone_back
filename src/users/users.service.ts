import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';
import * as bcrypt from 'bcrypt';
import { UserRole } from '@prisma/client';

@Injectable()
export class UserService {
    constructor(private prisma: PrismaService) {}

    async create(createUserDto: CreateUserDto) {
        // Hashear la contraseña antes de crear el usuario
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    
        return this.prisma.user.create({
            data: {
                email: createUserDto.email,
                name: createUserDto.name,
                password: hashedPassword,
                role: createUserDto.role || UserRole.USER, // Valor por defecto aquí
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
        const user = await this.prisma.user.findUnique({ where: { email } });
        return user;
    }
}