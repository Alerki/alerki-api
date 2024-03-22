import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { UuidNullableWithAggregatesFilter } from '../prisma/uuid-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { StringNullableWithAggregatesFilter } from '../prisma/string-nullable-with-aggregates-filter.input';

@InputType()
export class directus_sessionsScalarWhereWithAggregatesInput {

    @Field(() => [directus_sessionsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<directus_sessionsScalarWhereWithAggregatesInput>;

    @Field(() => [directus_sessionsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<directus_sessionsScalarWhereWithAggregatesInput>;

    @Field(() => [directus_sessionsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<directus_sessionsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    token?: StringWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    user?: UuidNullableWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    expires?: DateTimeWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    ip?: StringNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    user_agent?: StringNullableWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    share?: UuidNullableWithAggregatesFilter;

    @Field(() => StringNullableWithAggregatesFilter, {nullable:true})
    origin?: StringNullableWithAggregatesFilter;
}
