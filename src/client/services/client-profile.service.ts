import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class ClientProfileService {
  constructor(private readonly prismaService: PrismaService) {}

  async create<T extends Prisma.ClientProfileCreateArgs>(
    data: Prisma.SelectSubset<T, Prisma.ClientProfileCreateArgs>,
  ) {
    return this.prismaService.clientProfile.create(data);
  }

  async update<T extends Prisma.ClientProfileUpdateArgs>(
    data: Prisma.SelectSubset<T, Prisma.ClientProfileUpdateArgs>,
  ) {
    return this.prismaService.clientProfile.update(data);
  }

  async delete<T extends Prisma.ClientProfileDeleteArgs>(
    data: Prisma.SelectSubset<T, Prisma.ClientProfileDeleteArgs>,
  ) {
    return this.prismaService.clientProfile.delete(data);
  }

  async findFirst<T extends Prisma.ClientProfileFindFirstArgs>(
    data: Prisma.SelectSubset<T, Prisma.ClientProfileFindFirstArgs>,
  ) {
    return this.prismaService.clientProfile.findFirst(data);
  }

  async findMany<T extends Prisma.ClientProfileFindManyArgs>(
    data: Prisma.SelectSubset<T, Prisma.ClientProfileFindManyArgs>,
  ) {
    return this.prismaService.clientProfile.findMany(data);
  }

  async findExists<T extends Prisma.ClientProfileFindFirstArgs>(
    data: Prisma.SelectSubset<T, Prisma.ClientProfileFindFirstArgs>,
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
