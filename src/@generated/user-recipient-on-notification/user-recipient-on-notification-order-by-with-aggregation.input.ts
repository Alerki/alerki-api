import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserRecipientOnNotificationCountOrderByAggregateInput } from './user-recipient-on-notification-count-order-by-aggregate.input';
import { UserRecipientOnNotificationMaxOrderByAggregateInput } from './user-recipient-on-notification-max-order-by-aggregate.input';
import { UserRecipientOnNotificationMinOrderByAggregateInput } from './user-recipient-on-notification-min-order-by-aggregate.input';

@InputType()
export class UserRecipientOnNotificationOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_updated?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    notification?: keyof typeof SortOrder;

    @Field(() => UserRecipientOnNotificationCountOrderByAggregateInput, {nullable:true})
    _count?: UserRecipientOnNotificationCountOrderByAggregateInput;

    @Field(() => UserRecipientOnNotificationMaxOrderByAggregateInput, {nullable:true})
    _max?: UserRecipientOnNotificationMaxOrderByAggregateInput;

    @Field(() => UserRecipientOnNotificationMinOrderByAggregateInput, {nullable:true})
    _min?: UserRecipientOnNotificationMinOrderByAggregateInput;
}
