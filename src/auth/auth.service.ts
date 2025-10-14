import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'; 
import { CreateUserDto } from '../users/DTO/create-user.dto';
import { ConflictException } from '@nestjs/common/exceptions/conflict.exception';
import { UserRole } from '@prisma/client'; // Asegúrate de que UserRole esté importado correctamente
import { PrismaService } from 'src/prisma/prisma.service'; // Asegúrate de que PrismaService esté importado y configurado correctamente
@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService,
        private prisma: PrismaService, 
    ) {}

    async register(createUserDto: CreateUserDto) {
        // verificar si el usuario ya existe x email
        const existingUser = await this.usersService.findByEmail(createUserDto.email);
        if (existingUser) {
            throw new ConflictException('Este usuario con este email ya existe');
        }

        //construir el objeto de datos del usuario, FORZANDO el rol a 'USER'
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    
        const newUser = await this.prisma.user.create({
            data: {
                email: createUserDto.email,
                name: createUserDto.name,
                password: hashedPassword,
                role: UserRole.USER, // Rol FIJO aquí
            }
        });

        const payload = { 
            email: newUser.email, 
            sub: newUser.id, 
            role: newUser.role 
        };
        return {
            access_token: this.jwtService.sign(payload),
            user: {                 //datos pal front
                id: newUser.id, 
                name: newUser.name,
                email: newUser.email
                }
            };
            
        
    }

    async validateUser(email: string, password: string) {
        const user = await this.usersService.findByEmail(email);
        
        if (!user) {
            throw new UnauthorizedException('Credenciales inválidas');
        }
        
            //comparación directa con cuenta demo
            if (email === 'NewDemo@gmail.com') {

            if (user.password === password) { 

                const payload = { 
                email: user.email, 
                sub: user.id, 
                role: user.role 
                };
                
                return {
                access_token: this.jwtService.sign(payload),
                user: {          
                    id: user.id,   
                    name: user.name,
                    email: user.email,
                    role: user.role
                }
                };
            } else {
                throw new UnauthorizedException('Credenciales inválidas');
            }
            }
            
            //usuarios normales encriptacion
        const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
            throw new UnauthorizedException('Credenciales inválidas');
            }
        
            const payload = { 
            email: user.email, 
            sub: user.id, 
            role: user.role 
            };
            
            return {
            access_token: this.jwtService.sign(payload),
            user: {          
                id: user.id,   
                name: user.name,
                email: user.email,
                role: user.role
            }
            };
        }


}
        