import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
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

  async create(name: string) {
    const candidate = await this.prismaService.service.findFirst({
      where: {
        name,
      },
    });

    if (candidate) {
      throw new BadRequestException('Such service already exists');
    }

    return this.prismaService.service.create({
      data: { name },
    });
  }

  async delete<T extends Prisma.Prisma.ServiceDeleteArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.ServiceDeleteArgs>,
  ) {
    return this.prismaService.service.delete(data);
  }

  async searchByName(name: string, limit: number, page: number) {
    const r = await this.findMany({
      where: {
        name: {
          contains: name.split(' ').join(' & '),
          // search: name.split(' ').join(' & '),
        },
        available: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: limit,
      skip: limit * (page - 1),
    });

    console.log(r, '<<<');

    return {
      totalNumber: await this.prismaService.service.count({
        where: {
          name: {
            contains: name.split(' ').join(' & '),
          },
          available: true,
        },
      }),
      data: r,
    };
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
