import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_translationsOrderByRelevanceInput } from './directus-translations-order-by-relevance.input';

@InputType()
export class directus_translationsOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    language?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    value?: keyof typeof SortOrder;

    @Field(() => directus_translationsOrderByRelevanceInput, {nullable:true})
    _relevance?: directus_translationsOrderByRelevanceInput;
}
