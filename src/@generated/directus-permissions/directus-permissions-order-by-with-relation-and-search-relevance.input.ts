import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_rolesOrderByWithRelationAndSearchRelevanceInput } from '../directus-roles/directus-roles-order-by-with-relation-and-search-relevance.input';
import { directus_permissionsOrderByRelevanceInput } from './directus-permissions-order-by-relevance.input';

@InputType()
export class directus_permissionsOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    role?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    collection?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    action?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    permissions?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    validation?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    presets?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    fields?: keyof typeof SortOrder;

    @Field(() => directus_rolesOrderByWithRelationAndSearchRelevanceInput, {nullable:true})
    directus_roles?: directus_rolesOrderByWithRelationAndSearchRelevanceInput;

    @Field(() => directus_permissionsOrderByRelevanceInput, {nullable:true})
    _relevance?: directus_permissionsOrderByRelevanceInput;
}
