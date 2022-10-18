import { Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { prisma } from '@Shared/services/prisma.service';

/**
 * Client profile service
 */
@Injectable()
export class ClientProfileService {
  private readonly prismaService = prisma;

  /**
   * Client profile service constructor
   */
  constructor() { }

  /**
   * Create client profile
   *
   * @param data create client profile arguments
   * @returns new client profile
   */
  async create(data: Prisma.Prisma.ClientProfileCreateArgs = { data: {} }) {
    return await this.prismaService.clientProfile.create(data);
  }
}
