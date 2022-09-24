import { Module } from '@nestjs/common';

import { ClientProfileService } from '@Module/profile/client-profile.service';
import { MasterProfileService } from '@Module/profile/master-profile.service';
import { PrismaService } from '@Shared/services/prisma.service';

@Module({
  controllers: [],
  providers: [PrismaService, ClientProfileService, MasterProfileService],
  imports: [],
  exports: [ClientProfileService, MasterProfileService],
})
export class ProfileModule {}
