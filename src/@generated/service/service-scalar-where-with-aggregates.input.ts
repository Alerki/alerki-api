import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { UuidNullableWithAggregatesFilter } from '../prisma/uuid-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class ServiceScalarWhereWithAggregatesInput {

    @Field(() => [ServiceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<ServiceScalarWhereWithAggregatesInput>;

    @Field(() => [ServiceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<ServiceScalarWhereWithAggregatesInput>;

    @Field(() => [ServiceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<ServiceScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    status?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    sort?: IntNullableWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    user_created?: UuidNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    date_created?: DateTimeNullableWithAggregatesFilter;

    @Field(() => UuidNullableWithAggregatesFilter, {nullable:true})
    user_updated?: UuidNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    date_updated?: DateTimeNullableWithAggregatesFilter;
}
