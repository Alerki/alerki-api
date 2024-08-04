import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_notificationToUserInput } from './user-sender-on-notification-create-without-user-user-sender-on-notification-notification-to-user.input';
import { Type } from 'class-transformer';
import { UserSenderOnNotificationCreateOrConnectWithoutUser_UserSenderOnNotification_notificationToUserInput } from './user-sender-on-notification-create-or-connect-without-user-user-sender-on-notification-notification-to-user.input';
import { UserSenderOnNotificationCreateManyUser_UserSenderOnNotification_notificationToUserInputEnvelope } from './user-sender-on-notification-create-many-user-user-sender-on-notification-notification-to-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserSenderOnNotificationWhereUniqueInput } from './user-sender-on-notification-where-unique.input';

@InputType()
export class UserSenderOnNotificationUncheckedCreateNestedManyWithoutUser_UserSenderOnNotification_notificationToUserInput {
  @Field(
    () => [
      UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_notificationToUserInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_notificationToUserInput,
  )
  create?: Array<UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_notificationToUserInput>;

  @Field(
    () => [
      UserSenderOnNotificationCreateOrConnectWithoutUser_UserSenderOnNotification_notificationToUserInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      UserSenderOnNotificationCreateOrConnectWithoutUser_UserSenderOnNotification_notificationToUserInput,
  )
  connectOrCreate?: Array<UserSenderOnNotificationCreateOrConnectWithoutUser_UserSenderOnNotification_notificationToUserInput>;

  @Field(
    () =>
      UserSenderOnNotificationCreateManyUser_UserSenderOnNotification_notificationToUserInputEnvelope,
    { nullable: true },
  )
  @Type(
    () =>
      UserSenderOnNotificationCreateManyUser_UserSenderOnNotification_notificationToUserInputEnvelope,
  )
  createMany?: UserSenderOnNotificationCreateManyUser_UserSenderOnNotification_notificationToUserInputEnvelope;

  @Field(() => [UserSenderOnNotificationWhereUniqueInput], { nullable: true })
  @Type(() => UserSenderOnNotificationWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserSenderOnNotificationWhereUniqueInput, 'id'>
  >;
}
