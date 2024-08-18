import { Module } from '@nestjs/common';

import { UserService } from './user.service';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';

@Module({
  providers: [UserService],
  imports: [CommonPrismaModule],
  exports: [UserService],
})
export class UserModule {}
