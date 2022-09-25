import { Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { PrismaService } from '@Shared/services/prisma.service';

@Injectable()
export class SessionService {
  constructor(
    private readonly prismaService: PrismaService,
  ) {}

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
