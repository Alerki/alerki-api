import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class MasterScheduleScalarWhereInput {

    @Field(() => [MasterScheduleScalarWhereInput], {nullable:true})
    AND?: Array<MasterScheduleScalarWhereInput>;

    @Field(() => [MasterScheduleScalarWhereInput], {nullable:true})
    OR?: Array<MasterScheduleScalarWhereInput>;

    @Field(() => [MasterScheduleScalarWhereInput], {nullable:true})
    NOT?: Array<MasterScheduleScalarWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_created?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_updated?: DateTimeNullableFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    date?: DateTimeFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    startTime?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    endTime?: DateTimeNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    dayOff?: BoolFilter;

    @Field(() => UuidFilter, {nullable:true})
    masterProfile?: UuidFilter;
}
