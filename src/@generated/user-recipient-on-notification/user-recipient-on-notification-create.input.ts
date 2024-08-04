import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateNestedOneWithoutUserRecipientOnNotificationInput } from '../notification/notification-create-nested-one-without-user-recipient-on-notification.input';
import { UserCreateNestedOneWithoutUserRecipientOnNotificationInput } from '../user/user-create-nested-one-without-user-recipient-on-notification.input';

@InputType()
export class UserRecipientOnNotificationCreateInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(
    () => NotificationCreateNestedOneWithoutUserRecipientOnNotificationInput,
    { nullable: false },
  )
  Notification!: NotificationCreateNestedOneWithoutUserRecipientOnNotificationInput;

  @Field(() => UserCreateNestedOneWithoutUserRecipientOnNotificationInput, {
    nullable: false,
  })
  User!: UserCreateNestedOneWithoutUserRecipientOnNotificationInput;
}
