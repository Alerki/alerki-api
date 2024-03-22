import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_translationsCountOrderByAggregateInput } from './directus-translations-count-order-by-aggregate.input';
import { directus_translationsMaxOrderByAggregateInput } from './directus-translations-max-order-by-aggregate.input';
import { directus_translationsMinOrderByAggregateInput } from './directus-translations-min-order-by-aggregate.input';

@InputType()
export class directus_translationsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    language?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => directus_translationsCountOrderByAggregateInput, {nullable:true})
    _count?: directus_translationsCountOrderByAggregateInput;

    @Field(() => directus_translationsMaxOrderByAggregateInput, {nullable:true})
    _max?: directus_translationsMaxOrderByAggregateInput;

    @Field(() => directus_translationsMinOrderByAggregateInput, {nullable:true})
    _min?: directus_translationsMinOrderByAggregateInput;
}
