import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { UuidNullableWithAggregatesFilter } from '../prisma/uuid-nullable-with-aggregates-filter.input';

@InputType()
export class directus_dashboardsScalarWhereWithAggregatesInput {

    @Field(() => [directus_dashboardsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<directus_dashboardsScalarWhereWithAggregatesInput>;

    @Field(() => [directus_dashboardsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<directus_dashboardsScalarWhereWithAggregatesInput>;

    @Field(() => [directus_dashboardsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<directus_dashboardsScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    icon?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    note?: StringNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    date_created?: DateTimeNullableWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    user_created?: UuidNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    color?: StringNullableWithAggregatesFilter;
}
