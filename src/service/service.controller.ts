import { Controller, Get, Query } from '@nestjs/common';

import { GetServicesDto } from './dtos';
import { ServiceModuleService } from './services/service-module.service';

@Controller('service')
export class ServiceController {
  constructor(private readonly serviceModuleService: ServiceModuleService) {}

  @Get()
  async findService(@Query() data: GetServicesDto) {
    return this.serviceModuleService.findService(data);
  }
}
