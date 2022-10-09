import { forwardRef, Module } from '@nestjs/common';

import { ClientProfileService } from '@Module/profile/client-profile.service';
import { MasterProfileService } from '@Module/profile/master-profile.service';
import { ProfileController } from '@Module/profile/profile.controller';
import { UserModule } from '@Module/user/user.module';
import { AuthModule } from '@Module/auth/auth.module';
import { ProfileService } from '@Module/profile/profile.service';

@Module({
  controllers: [ProfileController],
  providers: [ProfileService, ClientProfileService, MasterProfileService],
  imports: [forwardRef(() => UserModule), forwardRef(() => AuthModule)],
  exports: [ProfileService, ClientProfileService, MasterProfileService],
})
export class ProfileModule {}
