import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { first_table } from 'generated/prisma';

@Injectable()
export class first_tableService {
    constructor(private prisma: PrismaService) {}

    async create(data: any): Promise<first_table> {
        return this.prisma.first_table.create({ data });
    }

    async findAll(): Promise<first_table[]> {
        return this.prisma.first_table.findMany();
    }

    async findOne(id: number): Promise<first_table | null> {
        return this.prisma.first_table.findUnique({ where: { id } });
    }

    async update(id: number, data: any): Promise<first_table> {
        return this.prisma.first_table.update({ where: { id }, data });
    }

    async remove(id: number): Promise<first_table> {
        return this.prisma.first_table.delete({ where: { id } });
    }
}
