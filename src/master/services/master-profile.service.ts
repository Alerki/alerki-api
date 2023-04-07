import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class MasterProfileService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Prisma.MasterProfileCreateArgs) {
    return this.prismaService.masterProfile.create(data);
  }

  async update(data: Prisma.MasterProfileUpdateArgs) {
    return this.prismaService.masterProfile.update(data);
  }

  async delete(data: Prisma.MasterProfileDeleteArgs) {
    return this.prismaService.masterProfile.delete(data);
  }

  async findFirst(data: Prisma.MasterProfileFindFirstArgs) {
    return this.prismaService.masterProfile.findFirst(data);
  }

  async findMany(data: Prisma.MasterProfileFindManyArgs) {
    return this.prismaService.masterProfile.findMany(data);
  }

  async findExists(
    data: Prisma.MasterProfileFindFirstArgs,
    callback?: () => never,
  ) {
    const candidate = await this.prismaService.masterProfile.findFirst(data);

    if (!candidate) {
      if (callback) {
        callback();
      }

      throw new NotFoundException('Master profile not exists');
    }

    return candidate;
  }
}
