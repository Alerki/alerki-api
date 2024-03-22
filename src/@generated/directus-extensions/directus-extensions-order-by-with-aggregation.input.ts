import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_extensionsCountOrderByAggregateInput } from './directus-extensions-count-order-by-aggregate.input';
import { directus_extensionsMaxOrderByAggregateInput } from './directus-extensions-max-order-by-aggregate.input';
import { directus_extensionsMinOrderByAggregateInput } from './directus-extensions-min-order-by-aggregate.input';

@InputType()
export class directus_extensionsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    enabled?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    folder?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    source?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bundle?: keyof typeof SortOrder;

    @Field(() => directus_extensionsCountOrderByAggregateInput, {nullable:true})
    _count?: directus_extensionsCountOrderByAggregateInput;

    @Field(() => directus_extensionsMaxOrderByAggregateInput, {nullable:true})
    _max?: directus_extensionsMaxOrderByAggregateInput;

    @Field(() => directus_extensionsMinOrderByAggregateInput, {nullable:true})
    _min?: directus_extensionsMinOrderByAggregateInput;
}
