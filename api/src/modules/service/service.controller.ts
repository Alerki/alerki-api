/* eslint-disable max-len */
import {
  Controller,
  Get,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiResponse,
  ApiTags,
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
  @ApiOkResponse({ description: 'Successful service search' })
  @ApiNotFoundResponse({ description: 'Services not exists' })
  @Get()
  async getServices(
    @Query() query: GetServicesDto,
  ) {
    return await this.serviceService.searchService(query);
  }

  /**
   * Get master services
   *
   * @param id service ID
   * @returns masters service
   */
  @ApiOperation({ description: 'Get master services' })
  @ApiOkResponse({ description: 'Master services got successfully' })
  @Get(':id/master')
  async getMasterServices(
    @Param('id') id: string,
  ) {
    return await this.serviceService.findMasterByServiceId(
      { id },
    );
  }
}
