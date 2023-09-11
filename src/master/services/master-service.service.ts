import { Injectable, NotFoundException } from '@nestjs/common';
import Prisma from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class MasterServiceService {
  constructor(private readonly prismaService: PrismaService) {}

  async create<T extends Prisma.Prisma.MasterServiceCreateArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.MasterServiceCreateArgs>,
  ) {
    return this.prismaService.masterService.create(data);
  }

  async update<T extends Prisma.Prisma.MasterServiceUpdateArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.MasterServiceUpdateArgs>,
  ) {
    return this.prismaService.masterService.update(data);
  }

  async delete<T extends Prisma.Prisma.MasterServiceDeleteArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.MasterServiceDeleteArgs>,
  ) {
    return this.prismaService.masterService.delete(data);
  }

  async findFirst<T extends Prisma.Prisma.MasterServiceFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<
      T,
      Prisma.Prisma.MasterServiceFindFirstArgs
    >,
  ) {
    return this.prismaService.masterService.findFirst(data);
  }

  async findMany<T extends Prisma.Prisma.MasterServiceFindManyArgs>(
    data: Prisma.Prisma.SelectSubset<
      T,
      Prisma.Prisma.MasterServiceFindManyArgs
    >,
  ) {
    return this.prismaService.masterService.findMany(data);
  }

  async findExists<T extends Prisma.Prisma.MasterServiceFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<
      T,
      Prisma.Prisma.MasterServiceFindFirstArgs
    >,
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
