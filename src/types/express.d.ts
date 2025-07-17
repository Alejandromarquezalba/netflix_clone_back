import { Request } from 'express'; 

declare module 'express' { //usamos 'declare module' para extender el módulo existente
    interface Request {
        user: { 
        id: string;      
        email: string;
        name?: string;    
        role: string;    
        };
    }
}