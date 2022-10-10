import { UserPictureService } from '@Module/user/user-picture.service';
import { UserController } from '@Module/user/user.controller';
import { UserService } from '@Module/user/user.service';
import { Module } from '@nestjs/common';

@Module({
  controllers: [UserController],
  providers: [UserService, UserPictureService],
  imports: [],
  exports: [UserService, UserPictureService],
})
export class UserModule { }
