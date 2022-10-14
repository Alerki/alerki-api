import { forwardRef, Module } from '@nestjs/common';

import { AuthModule } from '@Module/auth/auth.module';
import { ClientProfileService } from '@Module/profile/client-profile.service';
import { MasterProfileService } from '@Module/profile/master-profile.service';
import { MasterServiceService } from '@Module/profile/master-service.service';
import { ProfileController } from '@Module/profile/profile.controller';
import { ProfileService } from '@Module/profile/profile.service';
import { UserModule } from '@Module/user/user.module';
import { ServiceModule } from '@Module/service/service.module';

@Module({
  controllers: [ProfileController],
  providers: [
    ProfileService, ClientProfileService,
    MasterProfileService, MasterServiceService,
  ],
  imports: [
    forwardRef(() => UserModule), forwardRef(() => AuthModule),
    ServiceModule,
  ],
  exports: [
    ProfileService, ClientProfileService,
    MasterProfileService, MasterServiceService,
  ],
})
export class ProfileModule { }
