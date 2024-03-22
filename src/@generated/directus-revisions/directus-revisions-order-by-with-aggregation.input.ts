import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_revisionsCountOrderByAggregateInput } from './directus-revisions-count-order-by-aggregate.input';
import { directus_revisionsAvgOrderByAggregateInput } from './directus-revisions-avg-order-by-aggregate.input';
import { directus_revisionsMaxOrderByAggregateInput } from './directus-revisions-max-order-by-aggregate.input';
import { directus_revisionsMinOrderByAggregateInput } from './directus-revisions-min-order-by-aggregate.input';
import { directus_revisionsSumOrderByAggregateInput } from './directus-revisions-sum-order-by-aggregate.input';

@InputType()
export class directus_revisionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    activity?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    collection?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    item?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    data?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    delta?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    parent?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    version?: keyof typeof SortOrder;

    @Field(() => directus_revisionsCountOrderByAggregateInput, {nullable:true})
    _count?: directus_revisionsCountOrderByAggregateInput;

    @Field(() => directus_revisionsAvgOrderByAggregateInput, {nullable:true})
    _avg?: directus_revisionsAvgOrderByAggregateInput;

    @Field(() => directus_revisionsMaxOrderByAggregateInput, {nullable:true})
    _max?: directus_revisionsMaxOrderByAggregateInput;

    @Field(() => directus_revisionsMinOrderByAggregateInput, {nullable:true})
    _min?: directus_revisionsMinOrderByAggregateInput;

    @Field(() => directus_revisionsSumOrderByAggregateInput, {nullable:true})
    _sum?: directus_revisionsSumOrderByAggregateInput;
}
