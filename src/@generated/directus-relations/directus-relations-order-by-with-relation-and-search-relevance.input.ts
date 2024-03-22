import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_relationsOrderByRelevanceInput } from './directus-relations-order-by-relevance.input';

@InputType()
export class directus_relationsOrderByWithRelationAndSearchRelevanceInput {

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

    @Field(() => directus_relationsOrderByRelevanceInput, {nullable:true})
    _relevance?: directus_relationsOrderByRelevanceInput;
}
