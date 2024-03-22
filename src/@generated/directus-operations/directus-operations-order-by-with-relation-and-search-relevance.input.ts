import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_flowsOrderByWithRelationAndSearchRelevanceInput } from '../directus-flows/directus-flows-order-by-with-relation-and-search-relevance.input';
import { directus_usersOrderByWithRelationAndSearchRelevanceInput } from '../directus-users/directus-users-order-by-with-relation-and-search-relevance.input';
import { directus_operationsOrderByRelevanceInput } from './directus-operations-order-by-relevance.input';

@InputType()
export class directus_operationsOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    key?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    type?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    position_x?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    position_y?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    options?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    resolve?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    reject?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    flow?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_created?: keyof typeof SortOrder;

    @Field(() => directus_flowsOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_flows?: directus_flowsOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_operationsOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_operations_directus_operations_rejectTodirectus_operations?: directus_operationsOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_operationsOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    other_directus_operations_directus_operations_rejectTodirectus_operations?: directus_operationsOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_operationsOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_operations_directus_operations_resolveTodirectus_operations?: directus_operationsOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_operationsOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    other_directus_operations_directus_operations_resolveTodirectus_operations?: directus_operationsOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_usersOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_users?: directus_usersOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_operationsOrderByRelevanceInput, {nullable:true})
    _relevance?: directus_operationsOrderByRelevanceInput;
}
