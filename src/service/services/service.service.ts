import { Injectable, NotFoundException } from '@nestjs/common';
import Prisma from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class ServiceService {
  constructor(private readonly prismaService: PrismaService) {}

  async findFirst<T extends Prisma.Prisma.ServiceFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.ServiceFindFirstArgs>,
  ) {
    return this.prismaService.service.findFirst(data);
  }

  async findMany<T extends Prisma.Prisma.ServiceFindManyArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.ServiceFindManyArgs>,
  ) {
    return this.prismaService.service.findMany(data);
  }

  async findExists<T extends Prisma.Prisma.ServiceFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.ServiceFindFirstArgs>,
    callback?: () => never,
  ) {
    const candidate = await this.prismaService.service.findFirst(data);

    if (!candidate) {
      if (callback) {
        callback();
      }

      throw new NotFoundException('Service not exists');
    }

    return candidate;
  }

  async update<T extends Prisma.Prisma.ServiceUpdateArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.ServiceUpdateArgs>,
  ) {
    return this.prismaService.service.update(data);
  }

  async create<T extends Prisma.Prisma.ServiceCreateArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.ServiceCreateArgs>,
  ) {
    return this.prismaService.service.create(data);
  }

  async delete<T extends Prisma.Prisma.ServiceDeleteArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.ServiceDeleteArgs>,
  ) {
    return this.prismaService.service.delete(data);
  }

  async searchByName(name: string) {
    return this.findMany({
      where: {
        name: {
          contains: name.split(' ').join(' & '),
          // search: name.split(' ').join(' & '),
        },
        available: true,
      },
    });
  }

  async searchFirstByName(name: string) {
    return this.findFirst({
      where: {
        name: {
          contains: name.split(' ').join(' & '),
          // search: name.split(' ').join(' & '),
        },
        available: true,
      },
    });
  }
}
