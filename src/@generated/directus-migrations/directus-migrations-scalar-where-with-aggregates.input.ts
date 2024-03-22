import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class directus_migrationsScalarWhereWithAggregatesInput {

    @Field(() => [directus_migrationsScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<directus_migrationsScalarWhereWithAggregatesInput>;

    @Field(() => [directus_migrationsScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<directus_migrationsScalarWhereWithAggregatesInput>;

    @Field(() => [directus_migrationsScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<directus_migrationsScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    version?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    timestamp?: DateTimeNullableWithAggregatesFilter;
}
