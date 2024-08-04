import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecipientOnNotificationCreateManyNotificationInput } from './user-recipient-on-notification-create-many-notification.input';
import { Type } from 'class-transformer';

@InputType()
export class UserRecipientOnNotificationCreateManyNotificationInputEnvelope {
  @Field(() => [UserRecipientOnNotificationCreateManyNotificationInput], {
    nullable: false,
  })
  @Type(() => UserRecipientOnNotificationCreateManyNotificationInput)
  data!: Array<UserRecipientOnNotificationCreateManyNotificationInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
