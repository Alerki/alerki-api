import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationUpdateWithoutUserRecipientOnNotificationInput } from './notification-update-without-user-recipient-on-notification.input';
import { Type } from 'class-transformer';
import { NotificationCreateWithoutUserRecipientOnNotificationInput } from './notification-create-without-user-recipient-on-notification.input';

@InputType()
export class NotificationUpsertWithoutUserRecipientOnNotificationInput {
  @Field(() => NotificationUpdateWithoutUserRecipientOnNotificationInput, {
    nullable: false,
  })
  @Type(() => NotificationUpdateWithoutUserRecipientOnNotificationInput)
  update!: NotificationUpdateWithoutUserRecipientOnNotificationInput;

  @Field(() => NotificationCreateWithoutUserRecipientOnNotificationInput, {
    nullable: false,
  })
  @Type(() => NotificationCreateWithoutUserRecipientOnNotificationInput)
  create!: NotificationCreateWithoutUserRecipientOnNotificationInput;
}
