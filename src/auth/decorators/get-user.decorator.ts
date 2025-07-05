import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from '@prisma/client'; 

export const GetUser = createParamDecorator(
    (data: keyof User | undefined, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        //usuario se adjunta al objeto request por JwtStrategy
        const user = request.user;

        if (!user) {
        // Esto no debería suceder si JwtAuthGuard está aplicado
        // y el token es válido, pero es una buena práctica manejarlo.
        return null; // O lanzar una excepción si prefieres
        }
        // Si se especifica una clave (ej. @GetUser('role')), devuelve solo esa propiedad
        // De lo contrario, devuelve todo el objeto de usuario
        return data ? user[data] : user;
    },
);