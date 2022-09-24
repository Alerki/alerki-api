import { Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { PrismaService } from '@Shared/services/prisma.service';

@Injectable()
export class ClientProfileService {
  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  async create(data: Prisma.Prisma.ClientProfileCreateArgs = { data: {} }) {
    return this.prismaService.clientProfile.create(data);
  }
}
