import { Injectable } from '@nestjs/common';
import Prisma from '@prisma/client';

import { GetServicesDto } from '@Module/service/dto/service.dto';
import { PrismaService } from '@Shared/services/prisma.service';

/**
 * Services service
 */
@Injectable()
export class ServiceService {
  /**
   * Service service constructor
   *
   * @param prismaService prisma service
   */
  constructor(
    private readonly prismaService: PrismaService,
  ) {}

  /**
   * Find many services
   *
   * @param data search options
   * @returns services
   */
  private async findMany(data: Prisma.Prisma.ServiceFindManyArgs) {
    return await this.prismaService.service.findMany(data);
  }

  /**
   * Search services
   *
   * @param param0 search options
   * @returns services
   */
  async searchService({ name }: GetServicesDto) {
    return await this.findMany({
      where: {
        name: {
          search: name,
        },
        available: true,
      },
      orderBy: {
        masterServices: {
          _count: 'asc',
        },
      },
    });
  }
}
