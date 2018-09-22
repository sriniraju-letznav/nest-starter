import { Movie } from './movie.entity';
import { Injectable } from '@nestjs/common';
import { CrudTypeOrmService } from '@nestjsx/crud/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MovieService extends CrudTypeOrmService<Movie>{
    constructor(
        @InjectRepository(Movie)  readonly repository: Repository<Movie>,
      ) {
        super(repository);
      }
}
