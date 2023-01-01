import { Injectable } from '@nestjs/common';
import IUserService from './interfaces/userService.interface';
import User from 'src/classes/User';

@Injectable()
export class UserService {
  isInRole(role: string): boolean {
    const user = new User();
    return user.isInRole(role);
  }
}
