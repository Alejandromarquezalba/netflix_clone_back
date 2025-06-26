import { Module } from '@nestjs/common';
import { MovieService } from './movies.service';
import { MovieController } from './movies.controller';

@Module({
  providers: [MovieService],
  controllers: [MovieController]
})
export class MoviesModule {}
