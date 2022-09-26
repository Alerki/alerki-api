import { Body, Get, Query } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { GetServicesDto } from '@Module/service/dto/service.dto';
import { ServiceService } from '@Module/service/service.service';

/**
 * Services controller
 */
@ApiTags('Services')
@Controller('service')
export class ServiceController {
  /**
   * Services controller constructor
   *
   * @param serviceService services service
   */
  constructor(
    private readonly serviceService: ServiceService,
  ) {}

  /**
   * Search services
   *
   * @param query search service query
   * @returns services
   */
  @Get()
  async searchServices(
    @Query() query: GetServicesDto,
  ) {
    return await this.serviceService.searchService(query);
  }
}
