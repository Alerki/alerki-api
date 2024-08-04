import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_userToUserInput } from './user-sender-on-notification-create-without-user-user-sender-on-notification-user-to-user.input';
import { Type } from 'class-transformer';
import { UserSenderOnNotificationCreateOrConnectWithoutUser_UserSenderOnNotification_userToUserInput } from './user-sender-on-notification-create-or-connect-without-user-user-sender-on-notification-user-to-user.input';
import { UserSenderOnNotificationCreateManyUser_UserSenderOnNotification_userToUserInputEnvelope } from './user-sender-on-notification-create-many-user-user-sender-on-notification-user-to-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserSenderOnNotificationWhereUniqueInput } from './user-sender-on-notification-where-unique.input';

@InputType()
export class UserSenderOnNotificationCreateNestedManyWithoutUser_UserSenderOnNotification_userToUserInput {
  @Field(
    () => [
      UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_userToUserInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_userToUserInput,
  )
  create?: Array<UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_userToUserInput>;

  @Field(
    () => [
      UserSenderOnNotificationCreateOrConnectWithoutUser_UserSenderOnNotification_userToUserInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      UserSenderOnNotificationCreateOrConnectWithoutUser_UserSenderOnNotification_userToUserInput,
  )
  connectOrCreate?: Array<UserSenderOnNotificationCreateOrConnectWithoutUser_UserSenderOnNotification_userToUserInput>;

  @Field(
    () =>
      UserSenderOnNotificationCreateManyUser_UserSenderOnNotification_userToUserInputEnvelope,
    { nullable: true },
  )
  @Type(
    () =>
      UserSenderOnNotificationCreateManyUser_UserSenderOnNotification_userToUserInputEnvelope,
  )
  createMany?: UserSenderOnNotificationCreateManyUser_UserSenderOnNotification_userToUserInputEnvelope;

  @Field(() => [UserSenderOnNotificationWhereUniqueInput], { nullable: true })
  @Type(() => UserSenderOnNotificationWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserSenderOnNotificationWhereUniqueInput, 'id'>
  >;
}
