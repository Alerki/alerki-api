import { Injectable } from '@nestjs/common';
import bcryptjs from 'bcryptjs';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';
import { UserService } from '../../user/services/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly userService: UserService,
  ) {}

  async validateUser(username: string, inputPassword: string) {
    const user = await this.userService.findFirst({ where: { username } });

    if (user && bcryptjs.compareSync(inputPassword, user.password)) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }
}
