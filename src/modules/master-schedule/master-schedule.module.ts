import { Module } from '@nestjs/common';
import { MasterScheduleService } from './master-schedule.service';
import { MasterScheduleResolver } from './master-schedule.resolver';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { UserModule } from '../user/user.module';

@Module({
  providers: [MasterScheduleService, MasterScheduleResolver],
  imports: [CommonPrismaModule, UserModule],
  exports: [MasterScheduleService],
})
export class MasterScheduleModule {}
