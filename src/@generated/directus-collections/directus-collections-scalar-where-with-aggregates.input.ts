import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class directus_collectionsScalarWhereWithAggregatesInput {

    @Field(() => [directus_collectionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<directus_collectionsScalarWhereWithAggregatesInput>;

    @Field(() => [directus_collectionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<directus_collectionsScalarWhereWithAggregatesInput>;

    @Field(() => [directus_collectionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<directus_collectionsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    collection?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    icon?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    note?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    display_template?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    hidden?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    singleton?: BoolWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    translations?: JsonNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    archive_field?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    archive_app_filter?: BoolWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    archive_value?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    unarchive_value?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    sort_field?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    accountability?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    color?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    item_duplication_fields?: JsonNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    sort?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    group?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    collapse?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    preview_url?: StringNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    versioning?: BoolWithAggregatesFilter;
}
