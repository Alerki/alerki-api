import { Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class ServiceService {
  constructor(private readonly prismaService: PrismaService) {}

  async findFirst(data: Prisma.Prisma.ServiceFindFirstArgs) {
    return this.prismaService.service.findFirst(data);
  }

  async findMany(data: Prisma.Prisma.ServiceFindManyArgs) {
    return this.prismaService.service.findMany(data);
  }

  async update(data: Prisma.Prisma.ServiceUpdateArgs) {
    return this.prismaService.service.update(data);
  }

  async create(data: Prisma.Prisma.ServiceCreateArgs) {
    return this.prismaService.service.create(data);
  }

  async delete(data: Prisma.Prisma.ServiceDeleteArgs) {
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
}
