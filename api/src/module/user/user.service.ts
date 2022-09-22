import { Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { PrismaService } from '@Shared/services/prisma.service';

/**
 * User service
 */
@Injectable()
export class UserService {
  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  /**
   * Find unique user
   *
   * @param args find by arguments
   * @returns
   */
  async findUnique(args: Prisma.Prisma.UserFindUniqueArgs) {
    return this.prismaService.user.findUnique(args);
  }

  /**
   * Find many users
   *
   * @param args find many by arguments
   * @returns user if exists
   */
  async findMany(args: Prisma.Prisma.UserFindManyArgs) {
    return this.prismaService.user.findMany(args);
  }

  /**
   * Create user
   *
   * @param args create arguments
   * @returns
   */
  async create(args: Prisma.Prisma.UserCreateArgs) {
    return this.prismaService.user.create(args);
  }

  /**
   * Create many users
   *
   * @param args create many arguments
   * @returns
   */
  async createMany(args: Prisma.Prisma.UserCreateManyArgs) {
    return this.prismaService.user.createMany(args);
  }

  /**
   * Update user
   *
   * @param args Update arguments
   * @returns
   */
  async update(args: Prisma.Prisma.UserUpdateArgs) {
    return this.prismaService.user.update(args);
  }
}
