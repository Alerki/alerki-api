import { Module } from '@nestjs/common';

import { UserService } from './user.service';
import { CommonPrismaModule } from '../../shared/modules/prisma/prisma.module';
import { UserValidationService } from './user-validation.service';

@Module({
  providers: [UserService, UserValidationService],
  imports: [CommonPrismaModule],
  exports: [UserService, UserValidationService],
})
export class UserModule {}
