import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { PlanService } from './plans.service';

import { CreatePlanDto } from './DTO/create-plan.dto';
import { UpdatePlanDto } from './DTO/update-plan.dto';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';


//seguridad
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { UserRole } from '@prisma/client';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UseGuards } from '@nestjs/common';


@Controller('plan')
export class PlanController {
    constructor(private readonly planService: PlanService) {}

    @Post()
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN)              
    create(@Body() createPlanDto: CreatePlanDto) {
        return this.planService.create(createPlanDto);
    }

    @Get()
    findAll() {
        return this.planService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.planService.findOne(id);
    }

    @Patch(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN) 
    update(@Param('id') id: string, @Body() updatePlanDto: UpdatePlanDto) {
        return this.planService.update(id, updatePlanDto);
    }

    @Delete(':id')
    @UseGuards(JwtAuthGuard, RolesGuard)
    @Roles(UserRole.ADMIN) 
    remove(@Param('id') id: string) {
        return this.planService.remove(id);
    }
}