import { forwardRef, Module } from '@nestjs/common';

import { AuthModule } from '@Src/modules/auth/auth.module';
import { ClientProfileService } from '@Src/modules/profile/client-profile.service';
import { MasterProfileService } from '@Src/modules/profile/master-profile.service';
import { MasterScheduleService } from '@Src/modules/profile/master-schedule.service';
import { MasterServiceService } from '@Src/modules/profile/master-service.service';
import { ProfileService } from '@Src/modules/profile/profile.service';
import { MasterWeeklyScheduleService } from '@Src/modules/profile/weekly-schedule.service';
import { ServiceModule } from '@Src/modules/service/service.module';
import { UserModule } from '@Src/modules/user/user.module';
import { CurrencyService } from '@Shared/services/currency.service';

@Module({
  controllers: [],
  providers: [
    ProfileService, ClientProfileService,
    MasterProfileService, MasterServiceService,
    CurrencyService, MasterWeeklyScheduleService,
    MasterScheduleService,
  ],
  imports: [
    forwardRef(() => UserModule), forwardRef(() => AuthModule),
    ServiceModule,
  ],
  exports: [
    ProfileService, ClientProfileService,
    MasterProfileService, MasterServiceService,
    MasterWeeklyScheduleService,
    MasterScheduleService,
  ],
})
export class ProfileModule { }
