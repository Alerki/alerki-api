import { Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { prisma } from '@Shared/services/prisma.service';

@Injectable()
export class ClientProfileService {
  private readonly prismaService = prisma;

  constructor() {}

  async create(data: Prisma.Prisma.ClientProfileCreateArgs = { data: {} }) {
    return this.prismaService.clientProfile.create(data);
  }
}
