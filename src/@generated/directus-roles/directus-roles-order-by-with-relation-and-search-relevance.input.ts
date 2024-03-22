import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_permissionsOrderByRelationAggregateInput } from '../directus-permissions/directus-permissions-order-by-relation-aggregate.input';
import { directus_presetsOrderByRelationAggregateInput } from '../directus-presets/directus-presets-order-by-relation-aggregate.input';
import { directus_sharesOrderByRelationAggregateInput } from '../directus-shares/directus-shares-order-by-relation-aggregate.input';
import { directus_usersOrderByRelationAggregateInput } from '../directus-users/directus-users-order-by-relation-aggregate.input';
import { directus_rolesOrderByRelevanceInput } from './directus-roles-order-by-relevance.input';

@InputType()
export class directus_rolesOrderByWithRelationAndSearchRelevanceInput {

    @Field(() => SortOrder, {nullable:true})
    id?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    name?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    icon?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    description?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    ip_access?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    enforce_tfa?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    admin_access?: keyof typeof SortOrder;

    @Field(() => SortOrder, {nullable:true})
    app_access?: keyof typeof SortOrder;

    @Field(() => directus_permissionsOrderByRelationAggregateInput, {nullable:true})
    directus_permissions?: directus_permissionsOrderByRelationAggregateInput;

    @Field(() => directus_presetsOrderByRelationAggregateInput, {nullable:true})
    directus_presets?: directus_presetsOrderByRelationAggregateInput;

    @Field(() => directus_sharesOrderByRelationAggregateInput, {nullable:true})
    directus_shares?: directus_sharesOrderByRelationAggregateInput;

    @Field(() => directus_usersOrderByRelationAggregateInput, {nullable:true})
    directus_users?: directus_usersOrderByRelationAggregateInput;

    @Field(() => directus_rolesOrderByRelevanceInput, {nullable:true})
    _relevance?: directus_rolesOrderByRelevanceInput;
}
