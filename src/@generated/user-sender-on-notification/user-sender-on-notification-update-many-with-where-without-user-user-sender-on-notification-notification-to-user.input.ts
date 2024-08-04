import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSenderOnNotificationScalarWhereInput } from './user-sender-on-notification-scalar-where.input';
import { Type } from 'class-transformer';
import { UserSenderOnNotificationUpdateManyMutationInput } from './user-sender-on-notification-update-many-mutation.input';

@InputType()
export class UserSenderOnNotificationUpdateManyWithWhereWithoutUser_UserSenderOnNotification_notificationToUserInput {
  @Field(() => UserSenderOnNotificationScalarWhereInput, { nullable: false })
  @Type(() => UserSenderOnNotificationScalarWhereInput)
  where!: UserSenderOnNotificationScalarWhereInput;

  @Field(() => UserSenderOnNotificationUpdateManyMutationInput, {
    nullable: false,
  })
  @Type(() => UserSenderOnNotificationUpdateManyMutationInput)
  data!: UserSenderOnNotificationUpdateManyMutationInput;
}
