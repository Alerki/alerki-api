import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';
import { Type } from 'class-transformer';
import { JsonNullableWithAggregatesFilter } from '../prisma/json-nullable-with-aggregates-filter.input';

@InputType()
export class directus_webhooksScalarWhereWithAggregatesInput {

    @Field(() => [directus_webhooksScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<directus_webhooksScalarWhereWithAggregatesInput>;

    @Field(() => [directus_webhooksScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<directus_webhooksScalarWhereWithAggregatesInput>;

    @Field(() => [directus_webhooksScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<directus_webhooksScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    method?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    url?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    status?: StringWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    @Type(() => BoolWithAggregatesFilter)
    data?: BoolWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    actions?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    collections?: StringWithAggregatesFilter;

    @Field(() => JsonNullableWithAggregatesFilter, {nullable:true})
    headers?: JsonNullableWithAggregatesFilter;
}
