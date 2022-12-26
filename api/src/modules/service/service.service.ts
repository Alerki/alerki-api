import { MasterServiceService } from '@Module/profile/master-service.service';
import {
  Inject,
  Injectable,
  NotFoundException,
  forwardRef,
} from '@nestjs/common';
import Prisma from '@prisma/client';

import { prisma } from '@Shared/services/prisma.service';
import { GetServicesDto } from '@Src/modules/service/dto/service.dto';

/**
 * Services service
 */
@Injectable()
export class ServiceService {
  private readonly prismaService = prisma;

  /**
   * Service service constructor
   */
  constructor(
    @Inject(forwardRef(() => MasterServiceService))
    private readonly masterServiceService: MasterServiceService,
  ) { }

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
  async findMany(data: Prisma.Prisma.ServiceFindManyArgs) {
    return await this.prismaService.service.findMany(data);
  }

  /**
   * Search services
   *
   * @param param0 search options
   * @returns services
   */
  async searchService({ name }: GetServicesDto) {
    if (name) {
      const services = await this.findMany({
        where: {
          name: {
            search: name.split(' ').join(' & '),
          },
          available: true,
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

    return await this.findMany({
      where: {
        available: true,
      },
    });
  }

  /**
   * Find master service by service ID
   *
   * @param id service ID
   * @returns master services
   */
  async findMasterByServiceId(
    { id }: Pick<Prisma.Service, 'id'>,
  ) {
    return await this.masterServiceService.findMany({
      where: {
        serviceId: id,
      },
    });
  }

  /**
   * Update service
   *
   * @param data data to update
   * @returns updated service
   */
  async update(data: Prisma.Prisma.ServiceUpdateArgs) {
    return await this.prismaService.service.update(data);
  }
}
