import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { UserSenderOnNotificationCountOrderByAggregateInput } from './user-sender-on-notification-count-order-by-aggregate.input';
import { UserSenderOnNotificationMaxOrderByAggregateInput } from './user-sender-on-notification-max-order-by-aggregate.input';
import { UserSenderOnNotificationMinOrderByAggregateInput } from './user-sender-on-notification-min-order-by-aggregate.input';

@InputType()
export class UserSenderOnNotificationOrderByWithAggregationInput {

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

    @Field(() => UserSenderOnNotificationCountOrderByAggregateInput, {nullable:true})
    _count?: UserSenderOnNotificationCountOrderByAggregateInput;

    @Field(() => UserSenderOnNotificationMaxOrderByAggregateInput, {nullable:true})
    _max?: UserSenderOnNotificationMaxOrderByAggregateInput;

    @Field(() => UserSenderOnNotificationMinOrderByAggregateInput, {nullable:true})
    _min?: UserSenderOnNotificationMinOrderByAggregateInput;
}
