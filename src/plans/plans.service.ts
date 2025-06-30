import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { UpdatePlanDto } from './DTO/update-plan.dto';
import { CreatePlanDto } from './DTO/create-plan.dto';

@Injectable()
export class PlanService {
    constructor(private prisma: PrismaService) {}

    async create(createPlanDto: CreatePlanDto) {
        return this.prisma.plan.create({ data: createPlanDto });
    }

    async findAll() {
        return this.prisma.plan.findMany();
    }

    async findOne(id: string) {
        return this.prisma.plan.findUnique({ where: { id } });
    }

    async update(id: string, updatePlanDto: UpdatePlanDto) {
        return this.prisma.plan.update({
        where: { id },
        data: updatePlanDto,
        });
    }

    async remove(id: string) {
        return this.prisma.plan.delete({ where: { id } });
    }
}