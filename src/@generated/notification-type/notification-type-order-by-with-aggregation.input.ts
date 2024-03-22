import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NotificationTypeCountOrderByAggregateInput } from './notification-type-count-order-by-aggregate.input';
import { NotificationTypeAvgOrderByAggregateInput } from './notification-type-avg-order-by-aggregate.input';
import { NotificationTypeMaxOrderByAggregateInput } from './notification-type-max-order-by-aggregate.input';
import { NotificationTypeMinOrderByAggregateInput } from './notification-type-min-order-by-aggregate.input';
import { NotificationTypeSumOrderByAggregateInput } from './notification-type-sum-order-by-aggregate.input';

@InputType()
export class NotificationTypeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sort?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_updated?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_updated?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => NotificationTypeCountOrderByAggregateInput, {nullable:true})
    _count?: NotificationTypeCountOrderByAggregateInput;

    @Field(() => NotificationTypeAvgOrderByAggregateInput, {nullable:true})
    _avg?: NotificationTypeAvgOrderByAggregateInput;

    @Field(() => NotificationTypeMaxOrderByAggregateInput, {nullable:true})
    _max?: NotificationTypeMaxOrderByAggregateInput;

    @Field(() => NotificationTypeMinOrderByAggregateInput, {nullable:true})
    _min?: NotificationTypeMinOrderByAggregateInput;

    @Field(() => NotificationTypeSumOrderByAggregateInput, {nullable:true})
    _sum?: NotificationTypeSumOrderByAggregateInput;
}
