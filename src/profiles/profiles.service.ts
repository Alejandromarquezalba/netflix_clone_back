import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProfileDto } from './DTO/update-profile.dto';
import { CreateProfileDto } from './DTO/create-profile.dto';
import { ProfileTypeEnum, AgeRatingEnum } from '@prisma/client'; 
import { ForbiddenException, BadRequestException } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common/exceptions/not-found.exception';
import { UserRole } from '@prisma/client';
@Injectable()
export class ProfileService {
    private readonly MAX_PROFILES_PER_USER = 5; //5limite de perfiles x cada user

    constructor(private prisma: PrismaService) {}

    async create(createProfileDto: CreateProfileDto, authenticatedUserId: string) {
        const { type, ageRestriction } = createProfileDto;
    
        //validacikon de Limites de perfiles
        const profileCount = await this.prisma.profile.count({ 
          where: { userId: authenticatedUserId } //contamos los perfiles x usuario autenticado
        });
        
        if (profileCount >= this.MAX_PROFILES_PER_USER) {
            throw new ForbiddenException(
                `Has alcanzado el número máximo de ${this.MAX_PROFILES_PER_USER} perfiles permitidos.`,
            );
            }
        
            //validaion de la logica de negocio, perfiles de niños no son mature
            if (type === ProfileTypeEnum.CHILD && ageRestriction === AgeRatingEnum.MATURE) {
            throw new BadRequestException(
                "Los perfiles infantiles no pueden tener contenido 'MATURE'. Por favor, selecciona otra restricción de edad.",
            );
            }
        
            //el perfil es creado en la db
            return this.prisma.profile.create({
            data: {
                ...createProfileDto, //spreadOperator-eamos para mandar todas las props de DTO aca.
                userId: authenticatedUserId, //sobreescbrir el userId con el token
                },
            });
        }

    async findAll() {
        return this.prisma.profile.findMany();
    }

    async findOne(id: string) {
        return this.prisma.profile.findUnique({
            where: { id },
            select: {  
                id: true,
                name: true,
                userId: true, 
                type: true,
                ageRestriction: true, 
            }
        });
    }

    async findByUserId(userId: string) {
        return this.prisma.profile.findMany({
            where: { userId },
            select: {
                id: true, name: true, userId: true, type: true, ageRestriction: true,
            }
        });
    }

    async update(id: string, updateProfileDto: UpdateProfileDto) {
        return this.prisma.profile.update({
        where: { id },
        data: updateProfileDto,
        });
    }

    async remove(id: string, authenticatedUserId: string, userRole: UserRole) { //id del perfil y del usuario autenticado
            //ver si existe primero el usuario 
            const profile = await this.prisma.profile.findUnique({
            where: { id },
            });
        
            if (!profile) {
            throw new NotFoundException(`Perfil con ID "${id}" no encontrado.`);
            }
        
            //seguridad
            //verifico que el perfil sea del usuario, cordinando la autenticacion
            if (userRole !== UserRole.ADMIN && profile.userId !== authenticatedUserId) { 
                throw new ForbiddenException('No tienes permiso para eliminar este perfil.');
            }
        
            //si todo ok entonces se puede borrar
            await this.prisma.profile.delete({
            where: { id },
            });
    
        return { message: `Perfil con ID "${id}" eliminado exitosamente.` };
    }
}