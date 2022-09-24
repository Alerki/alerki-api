import { Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { PrismaService } from '@Shared/services/prisma.service';

@Injectable()
export class MasterProfileService {
  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  async create(data: Prisma.Prisma.MasterProfileCreateArgs = { data: {} }) {
    return this.prismaService.masterProfile.create(data);
  }
}
