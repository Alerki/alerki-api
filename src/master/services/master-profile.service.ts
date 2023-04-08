import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class MasterProfileService {
  constructor(private readonly prismaService: PrismaService) {}

  async create<T extends Prisma.MasterProfileCreateArgs>(
    data: Prisma.SelectSubset<T, Prisma.MasterProfileCreateArgs>,
  ) {
    return this.prismaService.masterProfile.create(data);
  }

  async update<T extends Prisma.MasterProfileUpdateArgs>(
    data: Prisma.SelectSubset<T, Prisma.MasterProfileUpdateArgs>,
  ) {
    return this.prismaService.masterProfile.update(data);
  }

  async delete<T extends Prisma.MasterProfileDeleteArgs>(
    data: Prisma.SelectSubset<T, Prisma.MasterProfileDeleteArgs>,
  ) {
    return this.prismaService.masterProfile.delete(data);
  }

  async findFirst<T extends Prisma.MasterProfileFindFirstArgs>(
    data: Prisma.SelectSubset<T, Prisma.MasterProfileFindFirstArgs>,
  ) {
    return this.prismaService.masterProfile.findFirst(data);
  }

  async findMany<T extends Prisma.MasterProfileFindManyArgs>(
    data: Prisma.SelectSubset<T, Prisma.MasterProfileFindManyArgs>,
  ) {
    return this.prismaService.masterProfile.findMany(data);
  }

  async findExists<T extends Prisma.MasterProfileFindFirstArgs>(
    data: Prisma.SelectSubset<T, Prisma.MasterProfileFindFirstArgs>,
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
