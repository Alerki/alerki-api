import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class MasterServiceService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Prisma.MasterServiceCreateArgs) {
    return this.prismaService.masterService.create(data);
  }

  async update(data: Prisma.MasterServiceUpdateArgs) {
    return this.prismaService.masterService.update(data);
  }

  async delete(data: Prisma.MasterServiceDeleteArgs) {
    return this.prismaService.masterService.delete(data);
  }

  async findFirst(data: Prisma.MasterServiceFindFirstArgs) {
    return this.prismaService.masterService.findFirst(data);
  }

  async findMany(data: Prisma.MasterServiceFindManyArgs) {
    return this.prismaService.masterService.findMany(data);
  }

  async findExists(
    data: Prisma.MasterServiceFindFirstArgs,
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
