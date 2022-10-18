import { Injectable, NotFoundException } from '@nestjs/common';
import Prisma from '@prisma/client';

import { GetServicesDto } from '@Module/service/dto/service.dto';
import { prisma } from '@Shared/services/prisma.service';

/**
 * Services service
 */
@Injectable()
export class ServiceService {
  private readonly prismaService = prisma;

  /**
   * Service service constructor
   */
  constructor() { }

  /**
   * Create service
   *
   * @param data create service data
   * @returns service
   */
  async create(data: Prisma.Prisma.ServiceCreateArgs) {
    return await this.prismaService.service.create(data);
  }

  /**
   * Find first service
   *
   * @param data find first data
   * @returns service
   */
  async findFirst(data: Prisma.Prisma.ServiceFindFirstArgs) {
    return await this.prismaService.service.findFirst(data);
  }

  /**
   * Find or create service
   *
   * @param param0 service name
   * @returns service
   */
  async findOrCreate({ name }: Pick<Prisma.Service, 'name'>) {
    const candidate = await this.prismaService.service.findFirst({
      where: {
        name,
      },
    });

    if (!candidate) {
      return await this.create({
        data: {
          name,
        },
      });
    }

    return candidate;
  }

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
    const services = await this.findMany({
      where: {
        name: {
          search: name,
        },
        // available: true, // uncomment later
      },
      orderBy: {
        masterServices: {
          _count: 'asc',
        },
      },
    });

    if (services.length === 0) {
      throw new NotFoundException('Services not exists');
    }

    return services;
  }
}
