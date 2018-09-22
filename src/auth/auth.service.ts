import { Injectable } from '@nestjs/common';
import * as jwt from 'jsonwebtoken';
import { JwtPayload } from './jwt-payload.interface';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(
      private readonly userService: UsersService) {}

      async createToken(id: number, username: string) {
        const expiresIn = 60 * 60;
        const secretOrKey = 'secretKey';
        const user = { username };
        const token = jwt.sign(user, secretOrKey, { expiresIn });
        return { expires_in: expiresIn, token };
      }

      async validateUser(signedUser): Promise<boolean> {
        if (signedUser && signedUser.username) {
          return Boolean(this.userService.getUserByUsername(signedUser.username));
        }

        return false;
      }
}