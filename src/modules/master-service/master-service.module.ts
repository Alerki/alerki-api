import { Module } from '@nestjs/common';
import { MasterServiceService } from './master-service.service';
import { MasterServiceResolver } from './master-service.resolver';

@Module({
  providers: [MasterServiceService, MasterServiceResolver],
})
export class MasterServiceModule {}
