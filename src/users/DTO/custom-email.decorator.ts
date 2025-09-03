import {
    registerDecorator,
    ValidationOptions,
    ValidatorConstraint,
    ValidatorConstraintInterface,
    ValidationArguments,
    } from 'class-validator';
    
//corres tipicos
    const ALLOWED_DOMAINS = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com'];
    
    @ValidatorConstraint({ async: false })
    export class IsAllowedEmailDomainConstraint implements ValidatorConstraintInterface {
        validate(email: string, args: ValidationArguments) {
        const domain = email.split('@')[1];
        return ALLOWED_DOMAINS.includes(domain);
        }
    
        defaultMessage(args: ValidationArguments) {
        return `Solo se permiten los siguientes dominios: ${ALLOWED_DOMAINS.join(', ')}.`;
        }
    }
    
    export function IsAllowedEmailDomain(validationOptions?: ValidationOptions) {
        return function (object: Object, propertyName: string) {
        registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [],
            validator: IsAllowedEmailDomainConstraint,
        });
        };
    }