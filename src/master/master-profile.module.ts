import { Module } from '@nestjs/common';

import { MasterProfileService } from './services/master-profile.service';
import { MasterServiceService } from './services/master-service.service';

@Module({
  controllers: [],
  providers: [MasterProfileService, MasterServiceService],
  imports: [],
  exports: [MasterProfileService, MasterServiceService],
})
export class MasterProfileModule {}
