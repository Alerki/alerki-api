import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_sessionsOrderByRelationAggregateInput } from '../directus-sessions/directus-sessions-order-by-relation-aggregate.input';
import { directus_collectionsOrderByWithRelationAndSearchRelevanceInput } from '../directus-collections/directus-collections-order-by-with-relation-and-search-relevance.input';
import { directus_rolesOrderByWithRelationAndSearchRelevanceInput } from '../directus-roles/directus-roles-order-by-with-relation-and-search-relevance.input';
import { directus_usersOrderByWithRelationAndSearchRelevanceInput } from '../directus-users/directus-users-order-by-with-relation-and-search-relevance.input';
import { directus_sharesOrderByRelevanceInput } from './directus-shares-order-by-relevance.input';

@InputType()
export class directus_sharesOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    collection?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    item?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    password?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_start?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_end?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    times_used?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    max_uses?: keyof typeof SortOrder;

    @Field(() => directus_sessionsOrderByRelationAggregateInput, {nullable:true})
    directus_sessions?: directus_sessionsOrderByRelationAggregateInput;

    @Field(() => directus_collectionsOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_collections?: directus_collectionsOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_rolesOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_roles?: directus_rolesOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_usersOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_users?: directus_usersOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_sharesOrderByRelevanceInput, {nullable:true})
    _relevance?: directus_sharesOrderByRelevanceInput;
}
