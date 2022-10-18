import { forwardRef, Module } from '@nestjs/common';

import { ProfileModule } from '@Module/profile/profile.module';
import { ServiceModule } from '@Module/service/service.module';
import { UserPictureService } from '@Module/user/user-picture.service';
import { UserController } from '@Module/user/user.controller';
import { UserService } from '@Module/user/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserPictureService],
  imports: [
    forwardRef(() => ServiceModule), forwardRef(() => ProfileModule),
  ],
  exports: [UserService, UserPictureService],
})
export class UserModule { }
