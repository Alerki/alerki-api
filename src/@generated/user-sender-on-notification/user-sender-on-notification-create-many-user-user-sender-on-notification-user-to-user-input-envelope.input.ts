import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSenderOnNotificationCreateManyUser_UserSenderOnNotification_userToUserInput } from './user-sender-on-notification-create-many-user-user-sender-on-notification-user-to-user.input';
import { Type } from 'class-transformer';

@InputType()
export class UserSenderOnNotificationCreateManyUser_UserSenderOnNotification_userToUserInputEnvelope {
  @Field(
    () => [
      UserSenderOnNotificationCreateManyUser_UserSenderOnNotification_userToUserInput,
    ],
    { nullable: false },
  )
  @Type(
    () =>
      UserSenderOnNotificationCreateManyUser_UserSenderOnNotification_userToUserInput,
  )
  data!: Array<UserSenderOnNotificationCreateManyUser_UserSenderOnNotification_userToUserInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
