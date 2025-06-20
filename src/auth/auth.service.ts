import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs'; 
import { CreateUserDto } from '../users/DTO/create-user.dto';
import { ConflictException } from '@nestjs/common/exceptions/conflict.exception';


@Injectable()
export class AuthService {
    constructor(
        private usersService: UserService,
        private jwtService: JwtService,
    ) {}

    async register(createUserDto: CreateUserDto) {
        const existingUser = await this.usersService.findByEmail(createUserDto.email);
        if (existingUser) {
            throw new ConflictException('Este usuario con este email ya existe');
            }
        
            const newUser = await this.usersService.create(createUserDto);
            
            const payload = { 
            email: newUser.email, 
            sub: newUser.id, 
            role: newUser.role 
            };
            
            return {
            user: {
                id: newUser.id,
                email: newUser.email,
                name: newUser.name,
                role: newUser.role
            },
            access_token: this.jwtService.sign(payload)
            };
        }

    async validateUser(email: string, password: string) {
        const user = await this.usersService.findByEmail(email);
        
        if (!user) {
            throw new UnauthorizedException('Credenciales inválidas');
        }

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
                email: user.email,
                name: user.name,
                role: user.role
            }
        };
    }
}