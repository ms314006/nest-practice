import { Injectable } from '@nestjs/common';
import User from 'src/classes/User';

@Injectable()
export class UserService {
  isInRole(role: string): boolean {
    const user = new User();
    return user.isInRole(role);
  }
}
