import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class MasterServiceService {
  constructor(private readonly prismaService: PrismaService) {}

  async create<T extends Prisma.MasterServiceCreateArgs>(
    data: Prisma.SelectSubset<T, Prisma.MasterServiceCreateArgs>,
  ) {
    return this.prismaService.masterService.create(data);
  }

  async update<T extends Prisma.MasterServiceUpdateArgs>(
    data: Prisma.SelectSubset<T, Prisma.MasterServiceUpdateArgs>,
  ) {
    return this.prismaService.masterService.update(data);
  }

  async delete<T extends Prisma.MasterServiceDeleteArgs>(
    data: Prisma.SelectSubset<T, Prisma.MasterServiceDeleteArgs>,
  ) {
    return this.prismaService.masterService.delete(data);
  }

  async findFirst<T extends Prisma.MasterServiceFindFirstArgs>(
    data: Prisma.SelectSubset<T, Prisma.MasterServiceFindFirstArgs>,
  ) {
    return this.prismaService.masterService.findFirst(data);
  }

  async findMany<T extends Prisma.MasterServiceFindManyArgs>(
    data: Prisma.SelectSubset<T, Prisma.MasterServiceFindManyArgs>,
  ) {
    return this.prismaService.masterService.findMany(data);
  }

  async findExists<T extends Prisma.MasterServiceFindFirstArgs>(
    data: Prisma.SelectSubset<T, Prisma.MasterServiceFindFirstArgs>,
    callback?: () => never,
  ) {
    const candidate = await this.prismaService.masterService.findFirst(data);

    if (!candidate) {
      if (callback) {
        callback();
      }

      throw new NotFoundException('Master service not exists');
    }

    return candidate;
  }
}
