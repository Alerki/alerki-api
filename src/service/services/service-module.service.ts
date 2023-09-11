import { Injectable, NotFoundException } from '@nestjs/common';

import { PrismaService } from '../../shared/modules/prisma/prisma.service';
import { FindMasterServices, GetServicesDto } from '../dtos';
import { ServiceService } from './service.service';

@Injectable()
export class ServiceModuleService {
  constructor(
    private readonly serviceService: ServiceService,
    private readonly prismaService: PrismaService,
  ) {}

  async findService(data: GetServicesDto) {
    if (data.name) {
      const services = await this.serviceService.searchByName(
        data.name,
        data.limit,
        data.page,
      );

      if (services.data.length === 0) {
        throw new NotFoundException('Services not exists');
      }

      return services;
    }

    const r = await this.serviceService.findMany({
      where: {
        available: true,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: data.limit,
      skip: data.limit * (data.page - 1),
    });

    return {
      totalNumber: await this.prismaService.service.count({
        where: {
          available: true,
        },
      }),
      data: r,
    };
  }

  async findServiceForMaster(id: string, data: FindMasterServices) {
    const r = await this.prismaService.masterService.findMany({
      where: {
        serviceId: id,
      },
      orderBy: {
        createdAt: 'desc',
      },
      take: data.limit,
      skip: data.limit * (data.page - 1),
    });

    return {
      totalNumber: await this.prismaService.masterService.count({
        where: {
          serviceId: id,
        },
      }),
      data: r,
    };
  }
}
