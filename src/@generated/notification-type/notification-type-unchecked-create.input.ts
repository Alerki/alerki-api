import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationUncheckedCreateNestedManyWithoutNotificationTypeInput } from '../notification/notification-unchecked-create-nested-many-without-notification-type.input';

@InputType()
export class NotificationTypeUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  user_created?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => String, { nullable: true })
  user_updated?: string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(
    () => NotificationUncheckedCreateNestedManyWithoutNotificationTypeInput,
    { nullable: true },
  )
  Notification?: NotificationUncheckedCreateNestedManyWithoutNotificationTypeInput;
}
