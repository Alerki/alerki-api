import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';

@InputType()
export class MasterProfileScalarWhereWithAggregatesInput {

    @Field(() => [MasterProfileScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MasterProfileScalarWhereWithAggregatesInput>;

    @Field(() => [MasterProfileScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MasterProfileScalarWhereWithAggregatesInput>;

    @Field(() => [MasterProfileScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MasterProfileScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    date_created?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    date_updated?: DateTimeNullableWithAggregatesFilter;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    masterWeeklySchedule?: UuidWithAggregatesFilter;
}
