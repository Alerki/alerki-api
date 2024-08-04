import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationTypeUpdateWithoutNotificationInput } from './notification-type-update-without-notification.input';
import { Type } from 'class-transformer';
import { NotificationTypeCreateWithoutNotificationInput } from './notification-type-create-without-notification.input';

@InputType()
export class NotificationTypeUpsertWithoutNotificationInput {
  @Field(() => NotificationTypeUpdateWithoutNotificationInput, {
    nullable: false,
  })
  @Type(() => NotificationTypeUpdateWithoutNotificationInput)
  update!: NotificationTypeUpdateWithoutNotificationInput;

  @Field(() => NotificationTypeCreateWithoutNotificationInput, {
    nullable: false,
  })
  @Type(() => NotificationTypeCreateWithoutNotificationInput)
  create!: NotificationTypeCreateWithoutNotificationInput;
}
