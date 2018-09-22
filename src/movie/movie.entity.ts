import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class MovieInfo{
    directors: string[];
    release_date: Date;
    rating: number;
    genres: string[];
    image_url: string;
    plot: string;
    rank: number;
    running_time_secs: number;
    actors: string[];
}

@Entity()
export class Movie {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('integer')
  year: number;

  @Column('text')
  title: string;

  @Column('json')
  info: MovieInfo;

}