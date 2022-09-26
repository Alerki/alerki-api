import { Module } from '@nestjs/common';

import { ClientProfileService } from '@Module/profile/client-profile.service';
import { MasterProfileService } from '@Module/profile/master-profile.service';

@Module({
  controllers: [],
  providers: [ClientProfileService, MasterProfileService],
  imports: [],
  exports: [ClientProfileService, MasterProfileService],
})
export class ProfileModule {}
