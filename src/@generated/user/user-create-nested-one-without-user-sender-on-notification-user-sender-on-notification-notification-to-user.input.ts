import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput } from './user-create-without-user-sender-on-notification-user-sender-on-notification-notification-to-user.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput } from './user-create-or-connect-without-user-sender-on-notification-user-sender-on-notification-notification-to-user.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput {
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

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'phoneNumber' | 'username'
  >;
}
