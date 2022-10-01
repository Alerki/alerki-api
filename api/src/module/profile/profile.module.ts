import { forwardRef, Module } from '@nestjs/common';

import { ProfileController } from '@Module/profile/profile.controller';
import { ClientProfileService } from '@Module/profile/client-profile.service';
import { MasterProfileService } from '@Module/profile/master-profile.service';
import { UserModule } from '@Module/user/user.module';
import { ProfileService } from '@Module/profile/profile.service';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, ClientProfileService, MasterProfileService],
  imports: [forwardRef(() => UserModule)],
  exports: [ClientProfileService, MasterProfileService],
})
export class ProfileModule {}
