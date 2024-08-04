import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateManyNotificationTypeInput } from './notification-create-many-notification-type.input';
import { Type } from 'class-transformer';

@InputType()
export class NotificationCreateManyNotificationTypeInputEnvelope {
  @Field(() => [NotificationCreateManyNotificationTypeInput], {
    nullable: false,
  })
  @Type(() => NotificationCreateManyNotificationTypeInput)
  data!: Array<NotificationCreateManyNotificationTypeInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
