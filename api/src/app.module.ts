import { Module } from '@nestjs/common';

import { AuthModule } from '@Src/modules/auth/auth.module';
import { ProfileModule } from '@Src/modules/profile/profile.module';
import { ServiceModule } from '@Src/modules/service/service.module';
import { UserModule } from '@Src/modules/user/user.module';


@Module({
  imports: [AuthModule, UserModule, ServiceModule, ProfileModule],
})
export class AppModule { }
