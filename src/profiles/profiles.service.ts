import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdateProfileDto } from './DTO/update-profile.dto';
import { CreateProfileDto } from './DTO/create-profile.dto';

@Injectable()
export class ProfileService {
    constructor(private prisma: PrismaService) {}

    async create(createProfileDto: CreateProfileDto) {
        return this.prisma.profile.create({ data: createProfileDto });
    }

    async findAll() {
        return this.prisma.profile.findMany();
    }

    async findOne(id: string) {
        return this.prisma.profile.findUnique({ where: { id } });
    }

    async update(id: string, updateProfileDto: UpdateProfileDto) {
        return this.prisma.profile.update({
        where: { id },
        data: updateProfileDto,
        });
    }

    async remove(id: string) {
        return this.prisma.profile.delete({ where: { id } });
    }
}