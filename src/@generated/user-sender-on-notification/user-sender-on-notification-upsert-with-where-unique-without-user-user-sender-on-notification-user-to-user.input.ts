import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserSenderOnNotificationWhereUniqueInput } from './user-sender-on-notification-where-unique.input';
import { Type } from 'class-transformer';
import { UserSenderOnNotificationUpdateWithoutUser_UserSenderOnNotification_userToUserInput } from './user-sender-on-notification-update-without-user-user-sender-on-notification-user-to-user.input';
import { UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_userToUserInput } from './user-sender-on-notification-create-without-user-user-sender-on-notification-user-to-user.input';

@InputType()
export class UserSenderOnNotificationUpsertWithWhereUniqueWithoutUser_UserSenderOnNotification_userToUserInput {
  @Field(() => UserSenderOnNotificationWhereUniqueInput, { nullable: false })
  @Type(() => UserSenderOnNotificationWhereUniqueInput)
  where!: Prisma.AtLeast<UserSenderOnNotificationWhereUniqueInput, 'id'>;

  @Field(
    () =>
      UserSenderOnNotificationUpdateWithoutUser_UserSenderOnNotification_userToUserInput,
    { nullable: false },
  )
  @Type(
    () =>
      UserSenderOnNotificationUpdateWithoutUser_UserSenderOnNotification_userToUserInput,
  )
  update!: UserSenderOnNotificationUpdateWithoutUser_UserSenderOnNotification_userToUserInput;

  @Field(
    () =>
      UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_userToUserInput,
    { nullable: false },
  )
  @Type(
    () =>
      UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_userToUserInput,
  )
  create!: UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_userToUserInput;
}
