import { MovieService } from './movie.service';
import { Movie } from './movie.entity';
import { CrudController } from '@nestjsx/crud';
import { Controller, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('movie')
@UseGuards(AuthGuard())
export class MovieController  extends CrudController<Movie> {
    constructor( readonly movieService: MovieService) {
      super(movieService);
    }
  }
