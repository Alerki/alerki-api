import { Injectable } from '@nestjs/common';

import { IJwtTokenData } from '../../auth/interfaces';
import { UserService } from './user.service';

@Injectable()
export class UserModuleService {
  constructor(private readonly userService: UserService) {}

  async getUser(username: string) {
    return this.userService.findFirst({
      where: {
        username,
      },
    });
  }

  async getProtectedUser(data: IJwtTokenData) {
    return this.userService.findFirst({
      where: {
        id: data.id,
      },
    });
  }
}
