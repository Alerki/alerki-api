import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';

@Injectable()
export class ClientProfileService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(data: Prisma.ClientProfileCreateArgs) {
    return this.prismaService.clientProfile.create(data);
  }

  async update(data: Prisma.ClientProfileUpdateArgs) {
    return this.prismaService.clientProfile.update(data);
  }

  async delete(data: Prisma.ClientProfileDeleteArgs) {
    return this.prismaService.clientProfile.delete(data);
  }

  async findFirst(data: Prisma.ClientProfileFindFirstArgs) {
    return this.prismaService.clientProfile.findFirst(data);
  }

  async findMany(data: Prisma.ClientProfileFindManyArgs) {
    return this.prismaService.clientProfile.findMany(data);
  }

  async findExists(
    data: Prisma.ClientProfileFindFirstArgs,
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
