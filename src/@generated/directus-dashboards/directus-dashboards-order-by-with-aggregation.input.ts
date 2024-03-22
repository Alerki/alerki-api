import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_dashboardsCountOrderByAggregateInput } from './directus-dashboards-count-order-by-aggregate.input';
import { directus_dashboardsMaxOrderByAggregateInput } from './directus-dashboards-max-order-by-aggregate.input';
import { directus_dashboardsMinOrderByAggregateInput } from './directus-dashboards-min-order-by-aggregate.input';

@InputType()
export class directus_dashboardsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    note?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;

    @Field(() => directus_dashboardsCountOrderByAggregateInput, {nullable:true})
    _count?: directus_dashboardsCountOrderByAggregateInput;

    @Field(() => directus_dashboardsMaxOrderByAggregateInput, {nullable:true})
    _max?: directus_dashboardsMaxOrderByAggregateInput;

    @Field(() => directus_dashboardsMinOrderByAggregateInput, {nullable:true})
    _min?: directus_dashboardsMinOrderByAggregateInput;
}
