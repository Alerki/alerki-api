import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_relationsCountOrderByAggregateInput } from './directus-relations-count-order-by-aggregate.input';
import { directus_relationsAvgOrderByAggregateInput } from './directus-relations-avg-order-by-aggregate.input';
import { directus_relationsMaxOrderByAggregateInput } from './directus-relations-max-order-by-aggregate.input';
import { directus_relationsMinOrderByAggregateInput } from './directus-relations-min-order-by-aggregate.input';
import { directus_relationsSumOrderByAggregateInput } from './directus-relations-sum-order-by-aggregate.input';

@InputType()
export class directus_relationsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    many_collection?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    many_field?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    one_collection?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    one_field?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    one_collection_field?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    one_allowed_collections?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    junction_field?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    sort_field?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    one_deselect_action?: keyof typeof SortOrder;

    @Field(() => directus_relationsCountOrderByAggregateInput, {nullable:true})
    _count?: directus_relationsCountOrderByAggregateInput;

    @Field(() => directus_relationsAvgOrderByAggregateInput, {nullable:true})
    _avg?: directus_relationsAvgOrderByAggregateInput;

    @Field(() => directus_relationsMaxOrderByAggregateInput, {nullable:true})
    _max?: directus_relationsMaxOrderByAggregateInput;

    @Field(() => directus_relationsMinOrderByAggregateInput, {nullable:true})
    _min?: directus_relationsMinOrderByAggregateInput;

    @Field(() => directus_relationsSumOrderByAggregateInput, {nullable:true})
    _sum?: directus_relationsSumOrderByAggregateInput;
}
