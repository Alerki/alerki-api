import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput } from './user-update-without-user-sender-on-notification-user-sender-on-notification-notification-to-user.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput } from './user-create-without-user-sender-on-notification-user-sender-on-notification-notification-to-user.input';

@InputType()
export class UserUpsertWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput {
  @Field(
    () =>
      UserUpdateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput,
    { nullable: false },
  )
  @Type(
    () =>
      UserUpdateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput,
  )
  update!: UserUpdateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput;

  @Field(
    () =>
      UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput,
    { nullable: false },
  )
  @Type(
    () =>
      UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput,
  )
  create!: UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput;
}
