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

  async findExists<T extends Prisma.Prisma.Service_translationsFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<
      T,
      Prisma.Prisma.Service_translationsFindFirstArgs
    >,
    callback?: () => never,
  ) {
    const candidate =
      await this.prismaService.service_translations.findFirst(data);

    if (!candidate) {
      if (callback) {
        callback();
      }

      throw new NotFoundException('Service not exists');
    }

    return candidate;
  }

  async searchByName(name: string, limit?: number, page?: number) {
    const r = await this.prismaService.service_translations.findMany({
      where: {
        name: {
          contains: name.split(' ').join(' & '),
          // search: name.split(' ').join(' & '),
        },
      },
      orderBy: {
        Service: {
          date_created: 'desc',
        },
      },
      include: {
        Service: {
          select: {
            date_created: true,
          },
        },
      },
      take: limit || 100,
      skip: limit ? limit * ((page || 1) - 1) : 0,
    });

    return {
      totalNumber: await this.prismaService.service_translations.count({
        where: {
          name: {
            contains: name.split(' ').join(' & '),
          },
        },
      }),
      data: r,
    };
  }

  async searchFirstByName(name: string) {
    return this.prismaService.service_translations.findFirst({
      where: {
        name: {
          contains: name.split(' ').join(' & '),
          // search: name.split(' ').join(' & '),
        },
      },
    });
  }
}
