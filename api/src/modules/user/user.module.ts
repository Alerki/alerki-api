import { forwardRef, Module } from '@nestjs/common';

import { ProfileModule } from '@Src/modules/profile/profile.module';
import { ServiceModule } from '@Src/modules/service/service.module';
import { UserPictureService } from '@Src/modules/user/user-picture.service';
import { UserController } from '@Src/modules/user/user.controller';
import { UserService } from '@Src/modules/user/user.service';

@Module({
  controllers: [UserController],
  providers: [UserService, UserPictureService],
  imports: [
    forwardRef(() => ServiceModule), forwardRef(() => ProfileModule),
  ],
  exports: [UserService, UserPictureService],
})
export class UserModule { }
