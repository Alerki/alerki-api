import { Controller, Get, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { GetServicesDto } from './dtos';
import { ServiceModuleService } from './services/service-module.service';

@ApiTags('Service')
@Controller('service')
export class ServiceController {
  constructor(private readonly serviceModuleService: ServiceModuleService) {}

  @Get()
  async findService(@Query() data: GetServicesDto) {
    return this.serviceModuleService.findService(data);
  }
}
