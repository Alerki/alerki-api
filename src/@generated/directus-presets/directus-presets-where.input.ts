import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { UuidNullableFilter } from '../prisma/uuid-nullable-filter.input';
import { JsonNullableFilter } from '../prisma/json-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { Directus_rolesRelationFilter } from '../prisma/directus-roles-relation-filter.input';
import { Directus_usersRelationFilter } from '../prisma/directus-users-relation-filter.input';

@InputType()
export class directus_presetsWhereInput {

    @Field(() => [directus_presetsWhereInput], {nullable:true})
    AND?: Array<directus_presetsWhereInput>;

    @Field(() => [directus_presetsWhereInput], {nullable:true})
    OR?: Array<directus_presetsWhereInput>;

    @Field(() => [directus_presetsWhereInput], {nullable:true})
    NOT?: Array<directus_presetsWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    bookmark?: StringNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    user?: UuidNullableFilter;

    @Field(() => UuidNullableFilter, {nullable:true})
    role?: UuidNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    collection?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    search?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    layout?: StringNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    layout_query?: JsonNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    layout_options?: JsonNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    refresh_interval?: IntNullableFilter;

    @Field(() => JsonNullableFilter, {nullable:true})
    filter?: JsonNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    icon?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    color?: StringNullableFilter;

    @Field(() => Directus_rolesRelationFilter, {nullable:true})
    directus_roles?: Directus_rolesRelationFilter;

    @Field(() => Directus_usersRelationFilter, {nullable:true})
    directus_users?: Directus_usersRelationFilter;
}
