import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

export class UpdateMovieDto extends PartialType(
    OmitType(CreateMovieDto, [] as const)
    ) {}

/*
patch - url + movies/:id de la movie a actualizar. 
{
    campos a actualizar
}

*/