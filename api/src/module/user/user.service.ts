import { Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { prisma } from '@Shared/services/prisma.service';

/**
 * User service
 */
@Injectable()
export class UserService {
  private readonly prismaService = prisma;

  constructor() {}

  /**
   * Find first user
   *
   * @param args find by arguments
   * @returns
   */
  async findFirst(args: Prisma.Prisma.UserFindFirstArgs) {
    return this.prismaService.user.findFirst(args);
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
   * Update user
   *
   * @param args Update arguments
   * @returns
   */
  async update(args: Prisma.Prisma.UserUpdateArgs) {
    return this.prismaService.user.update(args);
  }
}
