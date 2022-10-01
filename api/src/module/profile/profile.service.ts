import { Injectable, NotFoundException } from '@nestjs/common';
import Prisma from '@prisma/client';

import { UserService } from '@Module/user/user.service';

/**
 * User profile service
 */
@Injectable()
export class ProfileService {
  constructor(
    private readonly userService: UserService,
  ) {}

  /**
   * Get profile
   *
   * @param param0 get profile params
   * @returns profile
   */
  async getProfile({ username }: Pick<Prisma.User, 'username'>) {
    let profile= await this.userService.findFirst({
      where: {
        OR: [
          {
            username: {
              equals: username,
              mode: 'insensitive',
            },
          },
        ],
      },
      include: {
        clientProfile: true,
        masterProfile: true,
      },
    });

    if (!profile) {
      throw new NotFoundException('User profile not found');
    }

    return profile;
  }
}
