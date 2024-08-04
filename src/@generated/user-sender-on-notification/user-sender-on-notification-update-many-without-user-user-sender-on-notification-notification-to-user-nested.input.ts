import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSenderOnNotificationCreateWithoutUser_UserSenderOnNotification_notificationToUserInput } from './user-sender-on-notification-create-without-user-user-sender-on-notification-notification-to-user.input';
import { Type } from 'class-transformer';
import { UserSenderOnNotificationCreateOrConnectWithoutUser_UserSenderOnNotification_notificationToUserInput } from './user-sender-on-notification-create-or-connect-without-user-user-sender-on-notification-notification-to-user.input';
import { UserSenderOnNotificationUpsertWithWhereUniqueWithoutUser_UserSenderOnNotification_notificationToUserInput } from './user-sender-on-notification-upsert-with-where-unique-without-user-user-sender-on-notification-notification-to-user.input';
import { UserSenderOnNotificationCreateManyUser_UserSenderOnNotification_notificationToUserInputEnvelope } from './user-sender-on-notification-create-many-user-user-sender-on-notification-notification-to-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserSenderOnNotificationWhereUniqueInput } from './user-sender-on-notification-where-unique.input';
import { UserSenderOnNotificationUpdateWithWhereUniqueWithoutUser_UserSenderOnNotification_notificationToUserInput } from './user-sender-on-notification-update-with-where-unique-without-user-user-sender-on-notification-notification-to-user.input';
import { UserSenderOnNotificationUpdateManyWithWhereWithoutUser_UserSenderOnNotification_notificationToUserInput } from './user-sender-on-notification-update-many-with-where-without-user-user-sender-on-notification-notification-to-user.input';
import { UserSenderOnNotificationScalarWhereInput } from './user-sender-on-notification-scalar-where.input';

@InputType()
export class UserSenderOnNotificationUpdateManyWithoutUser_UserSenderOnNotification_notificationToUserNestedInput {
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
    () => [
      UserSenderOnNotificationUpsertWithWhereUniqueWithoutUser_UserSenderOnNotification_notificationToUserInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      UserSenderOnNotificationUpsertWithWhereUniqueWithoutUser_UserSenderOnNotification_notificationToUserInput,
  )
  upsert?: Array<UserSenderOnNotificationUpsertWithWhereUniqueWithoutUser_UserSenderOnNotification_notificationToUserInput>;

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
  set?: Array<Prisma.AtLeast<UserSenderOnNotificationWhereUniqueInput, 'id'>>;

  @Field(() => [UserSenderOnNotificationWhereUniqueInput], { nullable: true })
  @Type(() => UserSenderOnNotificationWhereUniqueInput)
  disconnect?: Array<
    Prisma.AtLeast<UserSenderOnNotificationWhereUniqueInput, 'id'>
  >;

  @Field(() => [UserSenderOnNotificationWhereUniqueInput], { nullable: true })
  @Type(() => UserSenderOnNotificationWhereUniqueInput)
  delete?: Array<
    Prisma.AtLeast<UserSenderOnNotificationWhereUniqueInput, 'id'>
  >;

  @Field(() => [UserSenderOnNotificationWhereUniqueInput], { nullable: true })
  @Type(() => UserSenderOnNotificationWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserSenderOnNotificationWhereUniqueInput, 'id'>
  >;

  @Field(
    () => [
      UserSenderOnNotificationUpdateWithWhereUniqueWithoutUser_UserSenderOnNotification_notificationToUserInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      UserSenderOnNotificationUpdateWithWhereUniqueWithoutUser_UserSenderOnNotification_notificationToUserInput,
  )
  update?: Array<UserSenderOnNotificationUpdateWithWhereUniqueWithoutUser_UserSenderOnNotification_notificationToUserInput>;

  @Field(
    () => [
      UserSenderOnNotificationUpdateManyWithWhereWithoutUser_UserSenderOnNotification_notificationToUserInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      UserSenderOnNotificationUpdateManyWithWhereWithoutUser_UserSenderOnNotification_notificationToUserInput,
  )
  updateMany?: Array<UserSenderOnNotificationUpdateManyWithWhereWithoutUser_UserSenderOnNotification_notificationToUserInput>;

  @Field(() => [UserSenderOnNotificationScalarWhereInput], { nullable: true })
  @Type(() => UserSenderOnNotificationScalarWhereInput)
  deleteMany?: Array<UserSenderOnNotificationScalarWhereInput>;
}
