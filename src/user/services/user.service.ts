import { Injectable, NotFoundException } from '@nestjs/common';
import Prisma from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async findFirst<T extends Prisma.Prisma.UserFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.UserFindFirstArgs>,
  ) {
    return this.prismaService.user.findFirst(data);
  }

  async findMany<T extends Prisma.Prisma.UserFindManyArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.UserFindManyArgs>,
  ) {
    return this.prismaService.user.findMany(data);
  }

  async create<T extends Prisma.Prisma.UserCreateArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.UserCreateArgs>,
  ) {
    return this.prismaService.user.create(data);
  }

  async update<T extends Prisma.Prisma.UserUpdateArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.UserUpdateArgs>,
  ) {
    return this.prismaService.user.update(data);
  }

  async findExists<T extends Prisma.Prisma.UserFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.UserFindFirstArgs>,
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
