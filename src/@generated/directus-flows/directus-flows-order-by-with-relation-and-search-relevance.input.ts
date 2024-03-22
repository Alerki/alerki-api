import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_usersOrderByWithRelationAndSearchRelevanceInput } from '../directus-users/directus-users-order-by-with-relation-and-search-relevance.input';
import { directus_operationsOrderByRelationAggregateInput } from '../directus-operations/directus-operations-order-by-relation-aggregate.input';
import { directus_flowsOrderByRelevanceInput } from './directus-flows-order-by-relevance.input';

@InputType()
export class directus_flowsOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    status?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    trigger?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    accountability?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    options?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    operation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_created?: keyof typeof SortOrder;

    @Field(() => directus_usersOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_users?: directus_usersOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_operationsOrderByRelationAggregateInput, {nullable:true})
    directus_operations?: directus_operationsOrderByRelationAggregateInput;

    @Field(() => directus_flowsOrderByRelevanceInput, {nullable:true})
    _relevance?: directus_flowsOrderByRelevanceInput;
}
