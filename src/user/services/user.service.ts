import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) { }

  async findFirst(
    data: Prisma.UserFindFirstArgs,
  ) {
    return this.prismaService.user.findFirst(data);
  }

  async findMany<T extends Prisma.UserFindManyArgs>(
    data: Prisma.SelectSubset<T, Prisma.UserFindManyArgs>,
  ) {
    return this.prismaService.user.findMany(data);
  }

  async create<T extends Prisma.UserCreateArgs>(
    data: Prisma.SelectSubset<T, Prisma.UserCreateArgs>,
  ) {
    return this.prismaService.user.create(data);
  }

  async update<T extends Prisma.UserUpdateArgs>(
    data: Prisma.SelectSubset<T, Prisma.UserUpdateArgs>,
  ) {
    return this.prismaService.user.update(data);
  }

  async findExists<T extends Prisma.UserFindFirstArgs>(
    data: Prisma.SelectSubset<T, Prisma.UserFindFirstArgs>,
    callback?: () => never,
  ) {
    const candidate = await this.prismaService.user.findFirst(data);

    if (!candidate) {
      if (callback) {
        callback();
      }

      throw new NotFoundException('User not exists');
    }

    return candidate;
  }
}
