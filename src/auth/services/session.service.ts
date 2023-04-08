import { BadRequestException, Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class SessionService {
  constructor(private readonly prismaService: PrismaService) { }

  async findFirst<T extends Prisma.Prisma.SessionFindFirstArgs>(data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.SessionFindFirstArgs>) {
    return this.prismaService.session.findFirst(data);
  }
  async findMany<T extends Prisma.Prisma.SessionFindManyArgs>(data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.SessionFindManyArgs>) {
    return this.prismaService.session.findMany(data);
  }

  async findExists<T extends Prisma.Prisma.SessionFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.SessionFindFirstArgs>,
    callback?: () => never,
  ) {
    const candidate = await this.findFirst(data);

    if (!candidate) {
      if (callback) {
        callback();
      }

      throw new BadRequestException('Session not exists');
    }

    return candidate;
  }

  async create<T extends Prisma.Prisma.SessionCreateArgs>(data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.SessionCreateArgs>) {
    return this.prismaService.session.create(data);
  }
  async update<T extends Prisma.Prisma.SessionUpdateArgs>(data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.SessionUpdateArgs>) {
    return this.prismaService.session.update(data);
  }
  async delete<T extends Prisma.Prisma.SessionDeleteArgs>(data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.SessionDeleteArgs>) {
    return this.prismaService.session.delete(data);
  }
}
