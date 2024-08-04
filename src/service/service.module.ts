import { Module } from '@nestjs/common';

import { ServiceController } from './service.controller';
import { ServiceResolver } from './service.resolver';
import { ServiceService } from './services/service.service';
import { ServiceModuleService } from './services/service-module.service';

@Module({
  controllers: [ServiceController],
  providers: [ServiceResolver, ServiceService, ServiceModuleService],
  exports: [ServiceService],
})
export class ServiceModule {}
