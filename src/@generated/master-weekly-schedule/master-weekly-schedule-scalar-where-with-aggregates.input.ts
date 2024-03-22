import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidWithAggregatesFilter } from '../prisma/uuid-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';
import { DateTimeNullableWithAggregatesFilter } from '../prisma/date-time-nullable-with-aggregates-filter.input';
import { BoolNullableWithAggregatesFilter } from '../prisma/bool-nullable-with-aggregates-filter.input';
import { BoolWithAggregatesFilter } from '../prisma/bool-with-aggregates-filter.input';

@InputType()
export class MasterWeeklyScheduleScalarWhereWithAggregatesInput {

    @Field(() => [MasterWeeklyScheduleScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<MasterWeeklyScheduleScalarWhereWithAggregatesInput>;

    @Field(() => [MasterWeeklyScheduleScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<MasterWeeklyScheduleScalarWhereWithAggregatesInput>;

    @Field(() => [MasterWeeklyScheduleScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<MasterWeeklyScheduleScalarWhereWithAggregatesInput>;

    @Field(() => UuidWithAggregatesFilter, {nullable:true})
    id?: UuidWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    status?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    sort?: IntNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    date_created?: DateTimeNullableWithAggregatesFilter;

    @Field(() => DateTimeNullableWithAggregatesFilter, {nullable:true})
    date_updated?: DateTimeNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    monday?: BoolNullableWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    tuesday?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    wednesday?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    thursday?: BoolWithAggregatesFilter;

    @Field(() => BoolWithAggregatesFilter, {nullable:true})
    friday?: BoolWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    saturday?: BoolNullableWithAggregatesFilter;

    @Field(() => BoolNullableWithAggregatesFilter, {nullable:true})
    sunday?: BoolNullableWithAggregatesFilter;
}
