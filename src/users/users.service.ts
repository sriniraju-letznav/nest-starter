import { User } from './users.entity';
import * as bcrypt from 'bcryptjs';
import { Injectable } from '@nestjs/common';
import { CrudTypeOrmService } from '@nestjsx/crud/typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
@Injectable()
export class UsersService{

  constructor(
        @InjectRepository(User)  readonly userRepository: Repository<User>,
      ) {
      }

      async getUsers(): Promise<User[]> {
        return await this.userRepository.find();
      }

      async getUserByUsername(username: string): Promise<User> {
        return (await this.userRepository.find({ username }))[0];
      }

      async createUser(user: User): Promise<User> {
        user.passwordHash = await this.getHash(user.password);

        // clear password as we don't persist passwords
        user.password = undefined;
        return this.userRepository.save(user);
      }

      async getHash(password: string|undefined): Promise<string> {
          return bcrypt.hash(password, 10);
      }

      async compareHash(password: string|undefined, hash: string|undefined): Promise<boolean> {
        return bcrypt.compare(password, hash);
      }

}
