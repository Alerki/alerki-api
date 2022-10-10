import { forwardRef, Module } from '@nestjs/common';

import { AuthModule } from '@Module/auth/auth.module';
import { ClientProfileService } from '@Module/profile/client-profile.service';
import { MasterProfileService } from '@Module/profile/master-profile.service';
import { ProfileController } from '@Module/profile/profile.controller';
import { ProfileService } from '@Module/profile/profile.service';
import { UserModule } from '@Module/user/user.module';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, ClientProfileService, MasterProfileService],
  imports: [forwardRef(() => UserModule), forwardRef(() => AuthModule)],
  exports: [ProfileService, ClientProfileService, MasterProfileService],
})
export class ProfileModule { }
