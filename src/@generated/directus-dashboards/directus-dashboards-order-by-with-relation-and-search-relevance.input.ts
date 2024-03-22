import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_usersOrderByWithRelationAndSearchRelevanceInput } from '../directus-users/directus-users-order-by-with-relation-and-search-relevance.input';
import { directus_panelsOrderByRelationAggregateInput } from '../directus-panels/directus-panels-order-by-relation-aggregate.input';
import { directus_dashboardsOrderByRelevanceInput } from './directus-dashboards-order-by-relevance.input';

@InputType()
export class directus_dashboardsOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    note?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    date_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user_created?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;

    @Field(() => directus_usersOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_users?: directus_usersOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_panelsOrderByRelationAggregateInput, {nullable:true})
    directus_panels?: directus_panelsOrderByRelationAggregateInput;

    @Field(() => directus_dashboardsOrderByRelevanceInput, {nullable:true})
    _relevance?: directus_dashboardsOrderByRelevanceInput;
}
