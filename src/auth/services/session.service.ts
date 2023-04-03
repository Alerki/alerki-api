import { BadRequestException, Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class SessionService {
  constructor(private readonly prismaService: PrismaService) {}

  async findFirst(data: Prisma.Prisma.SessionFindFirstArgs) {
    return this.prismaService.session.findFirst(data);
  }
  async findMany(data: Prisma.Prisma.SessionFindManyArgs) {
    return this.prismaService.session.findMany(data);
  }

  async findExists(
    data: Prisma.Prisma.SessionFindFirstArgs,
    callback?: () => never,
  ) {
    const candidate = await this.findFirst(data);

    console.log(candidate);
    if (!candidate) {
      if (callback) {
        callback();
      }

      throw new BadRequestException('Session not exists');
    }

    return candidate;
  }

  async create(data: Prisma.Prisma.SessionCreateArgs) {
    return this.prismaService.session.create(data);
  }
  async update(data: Prisma.Prisma.SessionUpdateArgs) {
    return this.prismaService.session.update(data);
  }
  async delete(data: Prisma.Prisma.SessionDeleteArgs) {
    return this.prismaService.session.delete(data);
  }
}
