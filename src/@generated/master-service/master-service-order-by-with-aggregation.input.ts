import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MasterServiceCountOrderByAggregateInput } from './master-service-count-order-by-aggregate.input';
import { MasterServiceAvgOrderByAggregateInput } from './master-service-avg-order-by-aggregate.input';
import { MasterServiceMaxOrderByAggregateInput } from './master-service-max-order-by-aggregate.input';
import { MasterServiceMinOrderByAggregateInput } from './master-service-min-order-by-aggregate.input';
import { MasterServiceSumOrderByAggregateInput } from './master-service-sum-order-by-aggregate.input';

@InputType()
export class MasterServiceOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_updated?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    masterProfile?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    duration?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    price?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    currency?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    service?: keyof typeof SortOrder;

    @Field(() => MasterServiceCountOrderByAggregateInput, {nullable:true})
    _count?: MasterServiceCountOrderByAggregateInput;

    @Field(() => MasterServiceAvgOrderByAggregateInput, {nullable:true})
    _avg?: MasterServiceAvgOrderByAggregateInput;

    @Field(() => MasterServiceMaxOrderByAggregateInput, {nullable:true})
    _max?: MasterServiceMaxOrderByAggregateInput;

    @Field(() => MasterServiceMinOrderByAggregateInput, {nullable:true})
    _min?: MasterServiceMinOrderByAggregateInput;

    @Field(() => MasterServiceSumOrderByAggregateInput, {nullable:true})
    _sum?: MasterServiceSumOrderByAggregateInput;
}
