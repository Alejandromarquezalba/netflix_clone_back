import {Catch, ArgumentsHost, HttpException, HttpStatus, ExceptionFilter} from '@nestjs/common';
import { Request, Response } from 'express';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';


@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
    constructor(private configService: ConfigService) {}
        catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
    
        const nodeEnv = this.configService.get<string>('NODE_ENV'); 
        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message: string | string[] = 'Error interno del servidor'; //mensaje generico
    

        if (exception instanceof HttpException) {
            status = exception.getStatus();
            const errorResponse = exception.getResponse(); // Puede ser string o un objeto { message: string[], error: string, statusCode: number }
    
            if (typeof errorResponse === 'object' && errorResponse !== null && 'message' in errorResponse) {
            message = errorResponse['message'] as string | string[];; 
            } else if (typeof errorResponse === 'string') {
            message = errorResponse;
            } else {
            message = exception.message; //mensaje por defecto de la excepción
            }
        } 

        else if (exception instanceof PrismaClientKnownRequestError) {
            if (exception.code === 'P2002') {
            status = HttpStatus.CONFLICT;
            //extraer el campo que causó el error de unicidad
            const field = (exception.meta as { target: string[] })?.target?.[0];
            message = field ? `El ${field} ya está en uso.` : 'Registro duplicado.';
            } else if (exception.code === 'P2025') { //registro no encontrado para actualización/eliminación
            status = HttpStatus.NOT_FOUND;
            message = 'El recurso solicitado no fue encontrado.';
            }
            else {
            status = HttpStatus.BAD_REQUEST; //otros errores de Prisma no tan específicos
            message = `Error en la base de datos: ${exception.message.split('\n').pop()}`; //mensaje más limpio
            }
        }
        
        //axios
        else if (axios.isAxiosError(exception)) {
        const axiosError = exception;
        status = axiosError.response?.status || HttpStatus.INTERNAL_SERVER_ERROR;
        message = axiosError.response?.data?.message || axiosError.message || 'Error al comunicarse con un servicio externo.';
        console.error('Axios Error:', axiosError.config?.url, axiosError.response?.data || axiosError.message);
    }

        //manejo de Cualquier Otra Excepción Inesperada (errores no atrapados)
        else if (exception instanceof Error) {
            status = HttpStatus.INTERNAL_SERVER_ERROR;

            // Si no estamos en producción, incluimos el mensaje específico del error.
            // En producción, solo un mensaje genérico para no exponer detalles internos.
            message = (nodeEnv !== 'production' && exception.message)
                ? `Ocurrió un error inesperado: ${exception.message}`
                : 'Ocurrió un error inesperado.';

            // Loggeamos el stack completo solo en desarrollo o entornos que no sean producción.
            if (nodeEnv !== 'production') {
                console.error('Unhandled exception stack:', exception.stack);
            } else {
                // En producción, loggeamos solo el mensaje para evitar logs excesivamente grandes o sensibles.
                console.error('Unhandled exception (production):', exception.message);
            }
        }
    
        // estructura de la Respuesta del Error
        response.status(status).json({
            statusCode: status,
            timestamp: new Date().toISOString(),
            path: request.url,
            message: message, 
        });
        }
    }
    