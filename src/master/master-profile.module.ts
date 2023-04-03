import { Module } from '@nestjs/common';

import { MasterProfileService } from './master-profile.service';

@Module({
  providers: [MasterProfileService]
})
export class MasterProfileModule {}
