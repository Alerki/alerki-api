import { Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { PrismaService } from '@Shared/services/prisma.service';

@Injectable()
export class SessionService {
  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  async create(
    userId: string,
    data: Pick<
      Prisma.AuthSession,
      'refreshToken' |
      'deviceName'
    >,
  ) {
    return this.prismaService.authSession.create({
      data: {
        ...data,
        users: {
          connect: {
            id: userId,
          },
        },
      },
    });
  }

  async update(
    id: string,
    data: Partial<
      Pick<Prisma.AuthSession,
        'refreshToken' |
        'deviceName'
      >
    >,
  ) {
    return this.prismaService.authSession.update({
      where: {
        id,
      },
      data,
    });
  }

  async createOrUpdate() {

  }
}
