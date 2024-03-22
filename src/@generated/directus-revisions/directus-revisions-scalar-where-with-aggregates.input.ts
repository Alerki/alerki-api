import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';
import { Type } from 'class-transformer';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { UuidNullableWithAggregatesFilter } from '../prisma/uuid-nullable-with-aggregates-filter.input';

@InputType()
export class directus_revisionsScalarWhereWithAggregatesInput {

    @Field(() => [directus_revisionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<directus_revisionsScalarWhereWithAggregatesInput>;

    @Field(() => [directus_revisionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<directus_revisionsScalarWhereWithAggregatesInput>;

    @Field(() => [directus_revisionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<directus_revisionsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    activity?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    collection?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    item?: StringWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    @Type(() => JsonNullableWithAggregatesFilter)
    data?: JsonNullableWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    delta?: JsonNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    parent?: IntNullableWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    version?: UuidNullableWithAggregatesFilter;
}
