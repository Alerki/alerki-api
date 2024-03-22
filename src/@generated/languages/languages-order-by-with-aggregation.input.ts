import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { languagesCountOrderByAggregateInput } from './languages-count-order-by-aggregate.input';
import { languagesMaxOrderByAggregateInput } from './languages-max-order-by-aggregate.input';
import { languagesMinOrderByAggregateInput } from './languages-min-order-by-aggregate.input';

@InputType()
export class languagesOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    code?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    direction?: keyof typeof SortOrder;

    @Field(() => languagesCountOrderByAggregateInput, {nullable:true})
    _count?: languagesCountOrderByAggregateInput;

    @Field(() => languagesMaxOrderByAggregateInput, {nullable:true})
    _max?: languagesMaxOrderByAggregateInput;

    @Field(() => languagesMinOrderByAggregateInput, {nullable:true})
    _min?: languagesMinOrderByAggregateInput;
}
