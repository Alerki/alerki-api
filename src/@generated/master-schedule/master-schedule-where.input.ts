import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { MasterProfileRelationFilter } from '../master-profile/master-profile-relation-filter.input';

@InputType()
export class MasterScheduleWhereInput {

    @Field(() => [MasterScheduleWhereInput], {nullable:true})
    AND?: Array<MasterScheduleWhereInput>;

    @Field(() => [MasterScheduleWhereInput], {nullable:true})
    OR?: Array<MasterScheduleWhereInput>;

    @Field(() => [MasterScheduleWhereInput], {nullable:true})
    NOT?: Array<MasterScheduleWhereInput>;

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

    @Field(() => MasterProfileRelationFilter, {nullable:true})
    MasterProfile?: MasterProfileRelationFilter;
}
