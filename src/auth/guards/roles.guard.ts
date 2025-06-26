import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { ROLES_KEY } from '../decorators/roles.decorator'; 
import { UserRole } from '@prisma/client';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private reflector: Reflector) {}

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(ROLES_KEY, [
        context.getHandler(),
        context.getClass(),
        ]);

        if (!requiredRoles) {
        return true; // Si no hay roles requeridos en el endpoint, permite el acceso (no está protegido por rol)
        }

        const { user } = context.switchToHttp().getRequest();
        // 'user' es el objeto que tu JwtStrategy adjuntó a la solicitud después de verificar el token.
        // Asegúrate de que 'user' tenga la propiedad 'role'.

        if (!user || !user.role) {
        return false; // Si no hay usuario autenticado o no tiene rol, deniega el acceso
        }

        // Verifica si el rol del usuario (user.role) es alguno de los roles requeridos para el endpoint
        return requiredRoles.some((role) => user.role === role);
    }
}