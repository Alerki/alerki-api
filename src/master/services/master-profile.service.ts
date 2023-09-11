import { Injectable, NotFoundException } from '@nestjs/common';
import Prisma from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class MasterProfileService {
  constructor(private readonly prismaService: PrismaService) {}

  async create<T extends Prisma.Prisma.MasterProfileCreateArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.MasterProfileCreateArgs>,
  ) {
    return this.prismaService.masterProfile.create(data);
  }

  async update<T extends Prisma.Prisma.MasterProfileUpdateArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.MasterProfileUpdateArgs>,
  ) {
    return this.prismaService.masterProfile.update(data);
  }

  async delete<T extends Prisma.Prisma.MasterProfileDeleteArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.MasterProfileDeleteArgs>,
  ) {
    return this.prismaService.masterProfile.delete(data);
  }

  async findFirst<T extends Prisma.Prisma.MasterProfileFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<
      T,
      Prisma.Prisma.MasterProfileFindFirstArgs
    >,
  ) {
    return this.prismaService.masterProfile.findFirst(data);
  }

  async findMany<T extends Prisma.Prisma.MasterProfileFindManyArgs>(
    data: Prisma.Prisma.SelectSubset<
      T,
      Prisma.Prisma.MasterProfileFindManyArgs
    >,
  ) {
    return this.prismaService.masterProfile.findMany(data);
  }

  async findExists<T extends Prisma.Prisma.MasterProfileFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<
      T,
      Prisma.Prisma.MasterProfileFindFirstArgs
    >,
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
