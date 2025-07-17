import {Catch, ArgumentsHost, HttpException, HttpStatus, ExceptionFilter} from '@nestjs/common';
import { Request, Response } from 'express';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import axios from 'axios';



@Catch() // Este decorador sin argumentos captura CUALQUIER excepción
export class AllExceptionsFilter implements ExceptionFilter {
        catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
    
        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message: string | string[] = 'Error interno del servidor'; // Mensaje genérico
    

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
            // Para errores no HTTP, a menudo los manejamos como 500 y ocultamos detalles sensibles en producción
            status = HttpStatus.INTERNAL_SERVER_ERROR;
            message = 'Ocurrió un error inesperado.';
            // Opcional: Loggear el error original para depuración
            console.error('Unhandled exception:', exception.stack); 
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
    