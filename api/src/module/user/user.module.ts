import { Module } from '@nestjs/common';
import { UserService } from '@Module/user/user.service';
import { UserPictureService } from '@Module/user/user-picture.service';

@Module({
  controllers: [],
  providers: [UserService, UserPictureService],
  imports: [],
  exports: [UserService, UserPictureService],
})
export class UserModule {}
