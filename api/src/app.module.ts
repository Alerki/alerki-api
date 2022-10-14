import { Module } from '@nestjs/common';

import { AuthModule } from '@Module/auth/auth.module';
import { ProfileModule } from '@Module/profile/profile.module';
import { ServiceModule } from '@Module/service/service.module';
import { UserModule } from '@Module/user/user.module';


@Module({
  imports: [AuthModule, UserModule, ServiceModule, ProfileModule],
})
export class AppModule { }
