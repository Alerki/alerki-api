import { Injectable, NotFoundException } from '@nestjs/common';

import { GetServicesDto } from '../dtos';
import { ServiceService } from './service.service';

@Injectable()
export class ServiceModuleService {
  constructor(private readonly serviceService: ServiceService) {}

  async findService({ name }: GetServicesDto) {
    if (name) {
      const services = await this.serviceService.searchByName(name);

      if (services.length === 0) {
        throw new NotFoundException('Services not exists');
      }
      return services;
    }

    return this.serviceService.findMany({
      where: {
        available: true,
      },
      take: 30,
    });
  }
}
