import { Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { prisma } from '@Shared/services/prisma.service';

@Injectable()
export class MasterProfileService {
  private readonly prismaService = prisma;

  constructor() { }

  async create(data: Prisma.Prisma.MasterProfileCreateArgs = { data: {} }) {
    return this.prismaService.masterProfile.create(data);
  }
}
