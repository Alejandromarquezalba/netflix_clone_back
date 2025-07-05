import { PartialType, OmitType } from '@nestjs/mapped-types';
import { CreateProfileDto } from './create-profile.dto';

export class UpdateProfileDto extends PartialType(
    OmitType(CreateProfileDto, [] as const)
    ) {}


