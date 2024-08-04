import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationTypeCreateNestedOneWithoutNotificationInput } from '../notification-type/notification-type-create-nested-one-without-notification.input';

@InputType()
export class NotificationCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => NotificationTypeCreateNestedOneWithoutNotificationInput, {
    nullable: false,
  })
  NotificationType!: NotificationTypeCreateNestedOneWithoutNotificationInput;
}
