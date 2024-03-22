import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { UuidNullableWithAggregatesFilter } from '../prisma/uuid-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class directus_sharesScalarWhereWithAggregatesInput {

    @Field(() => [directus_sharesScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<directus_sharesScalarWhereWithAggregatesInput>;

    @Field(() => [directus_sharesScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<directus_sharesScalarWhereWithAggregatesInput>;

    @Field(() => [directus_sharesScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<directus_sharesScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    name?: StringNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    collection?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    item?: StringWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    role?: UuidNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    password?: StringNullableWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    user_created?: UuidNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    date_created?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    date_start?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    date_end?: DateTimeNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    times_used?: IntNullableWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    max_uses?: IntNullableWithAggregatesFilter;
}
