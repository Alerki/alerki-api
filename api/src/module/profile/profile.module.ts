import { forwardRef, Module } from '@nestjs/common';

import { AuthModule } from '@Module/auth/auth.module';
import { ClientProfileService } from '@Module/profile/client-profile.service';
import { MasterProfileService } from '@Module/profile/master-profile.service';
import { MasterServiceService } from '@Module/profile/master-service.service';
import { ProfileService } from '@Module/profile/profile.service';
import { MasterWeekScheduleService } from '@Module/profile/week-schedule.service';
import { ServiceModule } from '@Module/service/service.module';
import { UserModule } from '@Module/user/user.module';
import { CurrencyService } from '@Shared/services/currency.service';

@Module({
  controllers: [],
  providers: [
    ProfileService, ClientProfileService,
    MasterProfileService, MasterServiceService,
    CurrencyService, MasterWeekScheduleService,
  ],
  imports: [
    forwardRef(() => UserModule), forwardRef(() => AuthModule),
    ServiceModule,
  ],
  exports: [
    ProfileService, ClientProfileService,
    MasterProfileService, MasterServiceService,
    CurrencyService, MasterWeekScheduleService,
  ],
})
export class ProfileModule { }
