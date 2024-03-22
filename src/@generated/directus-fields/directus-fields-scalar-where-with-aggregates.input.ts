import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';

@InputType()
export class directus_fieldsScalarWhereWithAggregatesInput {

    @Field(() => [directus_fieldsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<directus_fieldsScalarWhereWithAggregatesInput>;

    @Field(() => [directus_fieldsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<directus_fieldsScalarWhereWithAggregatesInput>;

    @Field(() => [directus_fieldsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<directus_fieldsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    collection?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    field?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    special?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    interface?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    options?: JsonNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    display?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    display_options?: JsonNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    readonly?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    hidden?: BoolWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    sort?: IntNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    width?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    translations?: JsonNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    note?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    conditions?: JsonNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    required?: BoolNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    group?: StringNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    validation?: JsonNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    validation_message?: StringNullableWithAggregatesFilter;
}
