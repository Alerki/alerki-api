import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserSenderOnNotificationWhereUniqueInput } from './user-sender-on-notification-where-unique.input';
import { Type } from 'class-transformer';
import { UserSenderOnNotificationUpdateWithoutUser_UserSenderOnNotification_userToUserInput } from './user-sender-on-notification-update-without-user-user-sender-on-notification-user-to-user.input';

@InputType()
export class UserSenderOnNotificationUpdateWithWhereUniqueWithoutUser_UserSenderOnNotification_userToUserInput {
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
  data!: UserSenderOnNotificationUpdateWithoutUser_UserSenderOnNotification_userToUserInput;
}
