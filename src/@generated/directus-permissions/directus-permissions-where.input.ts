import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { Directus_rolesRelationFilter } from '../prisma/directus-roles-relation-filter.input';

@InputType()
export class directus_permissionsWhereInput {

    @Field(() => [directus_permissionsWhereInput], {nullable:true})
    AND?: Array<directus_permissionsWhereInput>;

    @Field(() => [directus_permissionsWhereInput], {nullable:true})
    OR?: Array<directus_permissionsWhereInput>;

    @Field(() => [directus_permissionsWhereInput], {nullable:true})
    NOT?: Array<directus_permissionsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    role?: UuidNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    collection?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    action?: StringFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    permissions?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    validation?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    presets?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    fields?: StringNullableFilter;

    @Field(() => Directus_rolesRelationFilter, {nullable:true})
    directus_roles?: Directus_rolesRelationFilter;
}
