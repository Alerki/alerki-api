import { Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { prisma } from '@Shared/services/prisma.service';

@Injectable()
export class SessionService {
  private readonly prismaService = prisma;

  constructor() { }

  async create(
    data: Pick<Prisma.AuthSession, 'userId' | 'refreshToken' | 'deviceName'>,
  ) {
    return this.prismaService.authSession.create({
      data,
    });
  }

  async delete(data: Prisma.Prisma.AuthSessionDeleteArgs) {
    return this.prismaService.authSession.delete(data);
  }

  async findFirst(data: Prisma.Prisma.AuthSessionFindFirstArgsBase) {
    return this.prismaService.authSession.findFirst(data);
  }

  async findMany(data: Prisma.Prisma.AuthSessionFindManyArgs) {
    return this.prismaService.authSession.findMany(data);
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
}
