import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput } from './user-update-without-user-sender-on-notification-user-sender-on-notification-user-to-user.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput } from './user-create-without-user-sender-on-notification-user-sender-on-notification-user-to-user.input';

@InputType()
export class UserUpsertWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput {
  @Field(
    () =>
      UserUpdateWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput,
    { nullable: false },
  )
  @Type(
    () =>
      UserUpdateWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput,
  )
  update!: UserUpdateWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput;

  @Field(
    () =>
      UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput,
    { nullable: false },
  )
  @Type(
    () =>
      UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput,
  )
  create!: UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput;
}
