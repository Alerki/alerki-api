import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_rolesOrderByWithRelationAndSearchRelevanceInput } from '../directus-roles/directus-roles-order-by-with-relation-and-search-relevance.input';
import { directus_usersOrderByWithRelationAndSearchRelevanceInput } from '../directus-users/directus-users-order-by-with-relation-and-search-relevance.input';
import { directus_presetsOrderByRelevanceInput } from './directus-presets-order-by-relevance.input';

@InputType()
export class directus_presetsOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    bookmark?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    user?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    collection?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    search?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    layout?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    layout_query?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    layout_options?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    refresh_interval?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    filter?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    color?: keyof typeof SortOrder;

    @Field(() => directus_rolesOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_roles?: directus_rolesOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_usersOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_users?: directus_usersOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_presetsOrderByRelevanceInput, {nullable:true})
    _relevance?: directus_presetsOrderByRelevanceInput;
}
