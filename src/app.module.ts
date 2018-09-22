import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersService } from './users/users.service';
import { User } from './users/users.entity';
import { MovieController } from './movie/movie.controller';
import { MovieService } from './movie/movie.service';
import { Movie } from './movie/movie.entity';
import { UserModule } from 'users/user.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TypeOrmModule.forFeature([Movie]),
    AuthModule,
    UserModule,
  ],
  controllers: [AppController, MovieController],
  providers: [AppService, MovieService],
})
export class AppModule {}
