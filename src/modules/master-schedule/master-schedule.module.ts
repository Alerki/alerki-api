import { Module } from '@nestjs/common';
import { MasterScheduleService } from './master-schedule.service';
import { MasterScheduleResolver } from './master-schedule.resolver';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { UserModule } from '../user/user.module';
import { ProfileModule } from '../profile/profile.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  providers: [MasterScheduleService, MasterScheduleResolver],
  imports: [AuthModule, CommonPrismaModule, UserModule, ProfileModule],
  exports: [MasterScheduleService],
})
export class MasterScheduleModule {}
