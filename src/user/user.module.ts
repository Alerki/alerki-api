import { Module } from '@nestjs/common';

import { MasterProfileModule } from '../master/master-profile.module';
import { ServiceModule } from '../service/service.module';
import { UserModuleService } from './services/user.module.service';
import { UserService } from './services/user.service';
import { UserController } from './user.controller';

@Module({
  providers: [UserService, UserModuleService],
  controllers: [UserController],
  imports: [MasterProfileModule, ServiceModule],
  exports: [UserService],
})
export class UserModule {}
