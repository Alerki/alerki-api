import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { UuidNullableWithAggregatesFilter } from '../prisma/uuid-nullable-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';

@InputType()
export class directus_notificationsScalarWhereWithAggregatesInput {

    @Field(() => [directus_notificationsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<directus_notificationsScalarWhereWithAggregatesInput>;

    @Field(() => [directus_notificationsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<directus_notificationsScalarWhereWithAggregatesInput>;

    @Field(() => [directus_notificationsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<directus_notificationsScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    timestamp?: DateTimeNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    status?: StringNullableWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    recipient?: UuidWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    sender?: UuidNullableWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    subject?: StringWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    message?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    collection?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    item?: StringNullableWithAggregatesFilter;
}
