import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput } from './user-create-without-user-sender-on-notification-user-sender-on-notification-notification-to-user.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput } from './user-create-or-connect-without-user-sender-on-notification-user-sender-on-notification-notification-to-user.input';
import { UserUpsertWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput } from './user-upsert-without-user-sender-on-notification-user-sender-on-notification-notification-to-user.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput } from './user-update-without-user-sender-on-notification-user-sender-on-notification-notification-to-user.input';

@InputType()
export class UserUpdateOneRequiredWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserNestedInput {
  @Field(
    () =>
      UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput,
    { nullable: true },
  )
  @Type(
    () =>
      UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput,
  )
  create?: UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput;

  @Field(
    () =>
      UserCreateOrConnectWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput,
    { nullable: true },
  )
  @Type(
    () =>
      UserCreateOrConnectWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput,
  )
  connectOrCreate?: UserCreateOrConnectWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput;

  @Field(
    () =>
      UserUpsertWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput,
    { nullable: true },
  )
  @Type(
    () =>
      UserUpsertWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput,
  )
  upsert?: UserUpsertWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'phoneNumber' | 'username'
  >;

  @Field(
    () =>
      UserUpdateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput,
    { nullable: true },
  )
  @Type(
    () =>
      UserUpdateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput,
  )
  update?: UserUpdateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput;
}
