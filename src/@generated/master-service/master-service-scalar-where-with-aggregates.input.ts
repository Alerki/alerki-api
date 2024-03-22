import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';

@InputType()
export class MasterServiceScalarWhereWithAggregatesInput {

    @Field(() => [MasterServiceScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MasterServiceScalarWhereWithAggregatesInput>;

    @Field(() => [MasterServiceScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MasterServiceScalarWhereWithAggregatesInput>;

    @Field(() => [MasterServiceScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MasterServiceScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    status?: StringWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    date_created?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    date_updated?: DateTimeNullableWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    masterProfile?: UuidWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    duration?: DateTimeWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    price?: IntWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    currency?: UuidWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    service?: IntWithAggregatesFilter;
}
