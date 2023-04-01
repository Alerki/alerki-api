import { Module } from '@nestjs/common';

import { UserModuleService } from './services/user.module.service';
import { UserService } from './services/user.service';
import { UserController } from './user.controller';

@Module({
  providers: [UserService, UserModuleService],
  controllers: [UserController],
  exports: [UserService],
})
export class UserModule {}
