import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_operationsCountOrderByAggregateInput } from './directus-operations-count-order-by-aggregate.input';
import { directus_operationsAvgOrderByAggregateInput } from './directus-operations-avg-order-by-aggregate.input';
import { directus_operationsMaxOrderByAggregateInput } from './directus-operations-max-order-by-aggregate.input';
import { directus_operationsMinOrderByAggregateInput } from './directus-operations-min-order-by-aggregate.input';
import { directus_operationsSumOrderByAggregateInput } from './directus-operations-sum-order-by-aggregate.input';

@InputType()
export class directus_operationsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    position_x?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    position_y?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    options?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    resolve?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reject?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flow?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_created?: keyof typeof SortOrder;

    @Field(() => directus_operationsCountOrderByAggregateInput, {nullable:true})
    _count?: directus_operationsCountOrderByAggregateInput;

    @Field(() => directus_operationsAvgOrderByAggregateInput, {nullable:true})
    _avg?: directus_operationsAvgOrderByAggregateInput;

    @Field(() => directus_operationsMaxOrderByAggregateInput, {nullable:true})
    _max?: directus_operationsMaxOrderByAggregateInput;

    @Field(() => directus_operationsMinOrderByAggregateInput, {nullable:true})
    _min?: directus_operationsMinOrderByAggregateInput;

    @Field(() => directus_operationsSumOrderByAggregateInput, {nullable:true})
    _sum?: directus_operationsSumOrderByAggregateInput;
}
