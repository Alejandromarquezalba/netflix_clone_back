import { Module } from '@nestjs/common';
import { MovieService } from './movies.service';
import { MovieController } from './movies.controller';
import { MovieApiModule } from './api/movie-api.module';
//import { OmdbModule } from 'src/ombd/ombd.module';

@Module({
  imports: [MovieApiModule],
  providers: [MovieService],
  controllers: [MovieController]
})
export class MoviesModule {}
