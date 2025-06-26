import { PartialType } from '@nestjs/mapped-types';
import { CreatePlanDto } from './create-plan.dto';
import { IsOptional, IsBoolean, IsInt } from 'class-validator';

export class UpdatePlanDto extends PartialType(CreatePlanDto) {
  // Solo campos ESPECÍFICOS para actualización (que no existen en CreatePlanDto)
    @IsOptional()
    @IsBoolean()
    isActive?: boolean; //Desactivar un plan sin eliminarlo

    @IsOptional()
    @IsBoolean()
    canRenewAutomatically?: boolean; // Permitir renovación automática

    @IsOptional()
    @IsInt()
    currentSubscribers?: number; // Actualizar contador
}