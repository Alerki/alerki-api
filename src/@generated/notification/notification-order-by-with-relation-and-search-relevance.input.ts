import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserRecipientOnNotificationOrderByRelationAggregateInput } from '../user-recipient-on-notification/user-recipient-on-notification-order-by-relation-aggregate.input';
import { NotificationOrderByRelevanceInput } from './notification-order-by-relevance.input';

@InputType()
export class NotificationOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_updated?: keyof typeof SortOrder;

    @Field(() => UserRecipientOnNotificationOrderByRelationAggregateInput, {nullable:true})
    UserRecipientOnNotification?: UserRecipientOnNotificationOrderByRelationAggregateInput;

    @Field(() => NotificationOrderByRelevanceInput, {nullable:true})
    _relevance?: NotificationOrderByRelevanceInput;
}
