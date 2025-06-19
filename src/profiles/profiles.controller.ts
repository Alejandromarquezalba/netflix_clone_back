import { Controller, Get, Post, Body, Param, Delete, Patch } from '@nestjs/common';
import { ProfileService } from './profiles.service';

import { CreateProfileDto } from './DTO/create-profile.dto';
import { UpdateProfileDto } from './DTO/update-profile.dto';

@Controller('profile') // @Controller('movies')
export class ProfileController {
    constructor(private readonly profileService: ProfileService) {}

    @Post()
    create(@Body() createProfileDto: CreateProfileDto) {
        return this.profileService.create(createProfileDto);
    }

    @Get()
    findAll() {
        return this.profileService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.profileService.findOne(id);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateProfileDto: UpdateProfileDto) {
        return this.profileService.update(id, updateProfileDto);
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.profileService.remove(id);
    }
}