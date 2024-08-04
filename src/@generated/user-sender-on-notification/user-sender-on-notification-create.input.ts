import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput } from '../user/user-create-nested-one-without-user-sender-on-notification-user-sender-on-notification-notification-to-user.input';
import { UserCreateNestedOneWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput } from '../user/user-create-nested-one-without-user-sender-on-notification-user-sender-on-notification-user-to-user.input';

@InputType()
export class UserSenderOnNotificationCreateInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(
    () =>
      UserCreateNestedOneWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput,
    { nullable: false },
  )
  User_UserSenderOnNotification_notificationToUser!: UserCreateNestedOneWithoutUserSenderOnNotification_UserSenderOnNotification_notificationToUserInput;

  @Field(
    () =>
      UserCreateNestedOneWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput,
    { nullable: false },
  )
  User_UserSenderOnNotification_userToUser!: UserCreateNestedOneWithoutUserSenderOnNotification_UserSenderOnNotification_userToUserInput;
}
