import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { UuidNullableWithAggregatesFilter } from '../prisma/uuid-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class directus_permissionsScalarWhereWithAggregatesInput {

    @Field(() => [directus_permissionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<directus_permissionsScalarWhereWithAggregatesInput>;

    @Field(() => [directus_permissionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<directus_permissionsScalarWhereWithAggregatesInput>;

    @Field(() => [directus_permissionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<directus_permissionsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    role?: UuidNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    collection?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    action?: StringWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    permissions?: JsonNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    validation?: JsonNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    presets?: JsonNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    fields?: StringNullableWithAggregatesFilter;
}
