import { Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prismaService: PrismaService) {}

  async findFirst(data: Prisma.Prisma.UserFindFirstArgs) {
    return this.prismaService.user.findFirst(data);
  }

  async findMany(data: Prisma.Prisma.UserFindManyArgs) {
    return this.prismaService.user.findMany(data);
  }

  async create(data: Prisma.Prisma.UserCreateArgs) {
    return this.prismaService.user.create(data);
  }

  async update(data: Prisma.Prisma.UserUpdateArgs) {
    return this.prismaService.user.update(data);
  }
}
