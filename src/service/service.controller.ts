import { Controller, Get, Param, ParseUUIDPipe, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { FindMasterServices, GetServicesDto } from './dtos';
import { ServiceModuleService } from './services/service-module.service';

@ApiTags('Service')
@Controller('service')
export class ServiceController {
  constructor(private readonly serviceModuleService: ServiceModuleService) {}

  @Get()
  async findService(@Query() data: GetServicesDto) {
    const r = await this.serviceModuleService.findService(data);

    console.log(r);

    return r;
  }

  @Get(':id/master')
  async findServiceForMaster(
    @Param('id', ParseUUIDPipe) id: string,
    @Query() data: FindMasterServices,
  ) {
    return this.serviceModuleService.findServiceForMaster(id, data);
  }
}
