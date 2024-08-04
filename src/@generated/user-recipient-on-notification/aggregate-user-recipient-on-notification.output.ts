import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { UserRecipientOnNotificationCountAggregate } from './user-recipient-on-notification-count-aggregate.output';
import { UserRecipientOnNotificationMinAggregate } from './user-recipient-on-notification-min-aggregate.output';
import { UserRecipientOnNotificationMaxAggregate } from './user-recipient-on-notification-max-aggregate.output';

@ObjectType()
export class AggregateUserRecipientOnNotification {
  @Field(() => UserRecipientOnNotificationCountAggregate, { nullable: true })
  _count?: UserRecipientOnNotificationCountAggregate;

  @Field(() => UserRecipientOnNotificationMinAggregate, { nullable: true })
  _min?: UserRecipientOnNotificationMinAggregate;

  @Field(() => UserRecipientOnNotificationMaxAggregate, { nullable: true })
  _max?: UserRecipientOnNotificationMaxAggregate;
}
