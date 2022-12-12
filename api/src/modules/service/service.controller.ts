/* eslint-disable max-len */
import { Controller, Get, HttpStatus, Query } from '@nestjs/common';
import {
  ApiOperation, ApiResponse, ApiTags,
} from '@nestjs/swagger';

import { GetServicesDto } from '@Src/modules/service/dto/service.dto';
import { ServiceService } from '@Src/modules/service/service.service';

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
  ) { }

  /**
   * Search services
   *
   * @param query search service query
   * @returns services
   */
  @ApiOperation({ description: 'Service search' })
  @ApiResponse({ status: HttpStatus.OK, description: 'Successful service search' })
  @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Services not exists' })
  @Get()
  async searchServices(
    @Query() query: GetServicesDto,
  ) {
    return await this.serviceService.searchService(query);
  }
}
