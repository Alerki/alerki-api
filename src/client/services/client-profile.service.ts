import { Injectable, NotFoundException } from '@nestjs/common';
import Prisma from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class ClientProfileService {
  constructor(private readonly prismaService: PrismaService) {}

  async create<T extends Prisma.Prisma.ClientProfileCreateArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.ClientProfileCreateArgs>,
  ) {
    return this.prismaService.clientProfile.create(data);
  }

  async update<T extends Prisma.Prisma.ClientProfileUpdateArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.ClientProfileUpdateArgs>,
  ) {
    return this.prismaService.clientProfile.update(data);
  }

  async delete<T extends Prisma.Prisma.ClientProfileDeleteArgs>(
    data: Prisma.Prisma.SelectSubset<T, Prisma.Prisma.ClientProfileDeleteArgs>,
  ) {
    return this.prismaService.clientProfile.delete(data);
  }

  async findFirst<T extends Prisma.Prisma.ClientProfileFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<
      T,
      Prisma.Prisma.ClientProfileFindFirstArgs
    >,
  ) {
    return this.prismaService.clientProfile.findFirst(data);
  }

  async findMany<T extends Prisma.Prisma.ClientProfileFindManyArgs>(
    data: Prisma.Prisma.SelectSubset<
      T,
      Prisma.Prisma.ClientProfileFindManyArgs
    >,
  ) {
    return this.prismaService.clientProfile.findMany(data);
  }

  async findExists<T extends Prisma.Prisma.ClientProfileFindFirstArgs>(
    data: Prisma.Prisma.SelectSubset<
      T,
      Prisma.Prisma.ClientProfileFindFirstArgs
    >,
    callback?: () => never,
  ) {
    const candidate = await this.prismaService.clientProfile.findFirst(data);

    if (!candidate) {
      if (callback) {
        callback();
      }

      throw new NotFoundException('Appointment not exists');
    }

    return candidate;
  }
}
