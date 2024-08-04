import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput } from './user-create-without-user-sender-on-notification-user-sender-on-notification-user-to-user.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput } from './user-create-or-connect-without-user-sender-on-notification-user-sender-on-notification-user-to-user.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput {
  @Field(
    () =>
      UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput,
    { nullable: true },
  )
  @Type(
    () =>
      UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput,
  )
  create?: UserCreateWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput;

  @Field(
    () =>
      UserCreateOrConnectWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput,
    { nullable: true },
  )
  @Type(
    () =>
      UserCreateOrConnectWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput,
  )
  connectOrCreate?: UserCreateOrConnectWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'phoneNumber' | 'username'
  >;
}
