import { Request } from 'express'; 

declare module 'express' { //Usamos 'declare module' para extender el módulo existente
    interface Request {
        user: { 
        id: string;      
        email: string;
        name?: string;    
        role: string;    
        };
    }
}