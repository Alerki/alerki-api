import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_extensionsOrderByRelevanceInput } from './directus-extensions-order-by-relevance.input';

@InputType()
export class directus_extensionsOrderByWithRelationAndSearchRelevanceInput {

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

    @Field(() => directus_extensionsOrderByRelevanceInput, {nullable:true})
    _relevance?: directus_extensionsOrderByRelevanceInput;
}
