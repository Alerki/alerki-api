import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_notificationsCountOrderByAggregateInput } from './directus-notifications-count-order-by-aggregate.input';
import { directus_notificationsAvgOrderByAggregateInput } from './directus-notifications-avg-order-by-aggregate.input';
import { directus_notificationsMaxOrderByAggregateInput } from './directus-notifications-max-order-by-aggregate.input';
import { directus_notificationsMinOrderByAggregateInput } from './directus-notifications-min-order-by-aggregate.input';
import { directus_notificationsSumOrderByAggregateInput } from './directus-notifications-sum-order-by-aggregate.input';

@InputType()
export class directus_notificationsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    timestamp?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    recipient?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sender?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    subject?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    message?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    collection?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    item?: keyof typeof SortOrder;

    @Field(() => directus_notificationsCountOrderByAggregateInput, {nullable:true})
    _count?: directus_notificationsCountOrderByAggregateInput;

    @Field(() => directus_notificationsAvgOrderByAggregateInput, {nullable:true})
    _avg?: directus_notificationsAvgOrderByAggregateInput;

    @Field(() => directus_notificationsMaxOrderByAggregateInput, {nullable:true})
    _max?: directus_notificationsMaxOrderByAggregateInput;

    @Field(() => directus_notificationsMinOrderByAggregateInput, {nullable:true})
    _min?: directus_notificationsMinOrderByAggregateInput;

    @Field(() => directus_notificationsSumOrderByAggregateInput, {nullable:true})
    _sum?: directus_notificationsSumOrderByAggregateInput;
}
