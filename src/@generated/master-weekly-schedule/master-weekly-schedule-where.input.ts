import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { BoolNullableFilter } from '../prisma/bool-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { MasterProfileListRelationFilter } from '../master-profile/master-profile-list-relation-filter.input';

@InputType()
export class MasterWeeklyScheduleWhereInput {

    @Field(() => [MasterWeeklyScheduleWhereInput], {nullable:true})
    AND?: Array<MasterWeeklyScheduleWhereInput>;

    @Field(() => [MasterWeeklyScheduleWhereInput], {nullable:true})
    OR?: Array<MasterWeeklyScheduleWhereInput>;

    @Field(() => [MasterWeeklyScheduleWhereInput], {nullable:true})
    NOT?: Array<MasterWeeklyScheduleWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    sort?: IntNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_created?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_updated?: DateTimeNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    monday?: BoolNullableFilter;

    @Field(() => BoolFilter, {nullable:true})
    tuesday?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    wednesday?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    thursday?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    friday?: BoolFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    saturday?: BoolNullableFilter;

    @Field(() => BoolNullableFilter, {nullable:true})
    sunday?: BoolNullableFilter;

    @Field(() => MasterProfileListRelationFilter, {nullable:true})
    MasterProfile?: MasterProfileListRelationFilter;
}
