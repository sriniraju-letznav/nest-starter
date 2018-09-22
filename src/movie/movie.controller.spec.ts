import { Test, TestingModule } from '@nestjs/testing';
import { MovieController } from './movie.controller';

describe('Movie Controller', () => {
  let module: TestingModule;
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [MovieController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: MovieController = module.get<MovieController>(MovieController);
    expect(controller).toBeDefined();
  });
});
