import { Injectable } from '@nestjs/common';
import { Prisma, Service } from '@prisma/client';

import { CommonPrismaService } from '../../shared/modules/prisma/prisma.service';
import { ServicesValidationService } from './services-validation.service';

@Injectable()
export class ServicesService {
  constructor(
    private readonly commonPrismaService: CommonPrismaService,
    private readonly servicesValidationService: ServicesValidationService,
  ) {}

  async findValidService<ArgsT extends Prisma.ServiceFindFirstArgs>(
    where: Partial<Pick<Service, 'id'>>,
    args?: ArgsT,
  ) {
    try {
      const service = await this.findValidServiceOrThrow(where, args);
      return service;
    } catch (e) {
      return undefined;
    }
  }

  async findValidServiceOrThrow<ArgsT extends Prisma.ServiceFindFirstArgs>(
    where: Partial<Pick<Service, 'id'>>,
    args?: ArgsT,
  ) {
    const service = await this.commonPrismaService.service.findFirst({
      where,
      ...args,
    });

    this.servicesValidationService.isServiceDefined(service, true);
    this.servicesValidationService.isServicePublished(service, true);

    return service! as Prisma.ServiceGetPayload<ArgsT>;
  }
}
