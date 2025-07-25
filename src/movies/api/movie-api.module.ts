
import { Module } from '@nestjs/common';
import { MovieApiService } from './movie-api.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule], // Necesario para usar ConfigService
    providers: [MovieApiService],
    exports: [MovieApiService] // ¡Importante exportarlo!
})
export class MovieApiModule {}