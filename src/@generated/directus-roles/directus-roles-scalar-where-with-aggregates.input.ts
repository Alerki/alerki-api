import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class directus_rolesScalarWhereWithAggregatesInput {

    @Field(() => [directus_rolesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<directus_rolesScalarWhereWithAggregatesInput>;

    @Field(() => [directus_rolesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<directus_rolesScalarWhereWithAggregatesInput>;

    @Field(() => [directus_rolesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<directus_rolesScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    icon?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    description?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    ip_access?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    enforce_tfa?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    admin_access?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    app_access?: BoolWithAggregatesFilter;
}
