import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UuidFilter } from '../prisma/uuid-filter.input';
import { DateTimeNullableFilter } from '../prisma/date-time-nullable-filter.input';
import { AppointmentListRelationFilter } from '../appointment/appointment-list-relation-filter.input';
import { MasterWeeklyScheduleRelationFilter } from '../master-weekly-schedule/master-weekly-schedule-relation-filter.input';
import { MasterScheduleListRelationFilter } from '../master-schedule/master-schedule-list-relation-filter.input';
import { MasterServiceListRelationFilter } from '../master-service/master-service-list-relation-filter.input';
import { UserListRelationFilter } from '../user/user-list-relation-filter.input';

@InputType()
export class MasterProfileWhereInput {

    @Field(() => [MasterProfileWhereInput], {nullable:true})
    AND?: Array<MasterProfileWhereInput>;

    @Field(() => [MasterProfileWhereInput], {nullable:true})
    OR?: Array<MasterProfileWhereInput>;

    @Field(() => [MasterProfileWhereInput], {nullable:true})
    NOT?: Array<MasterProfileWhereInput>;

    @Field(() => UuidFilter, {nullable:true})
    id?: UuidFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_created?: DateTimeNullableFilter;

    @Field(() => DateTimeNullableFilter, {nullable:true})
    date_updated?: DateTimeNullableFilter;

    @Field(() => UuidFilter, {nullable:true})
    masterWeeklySchedule?: UuidFilter;

    @Field(() => AppointmentListRelationFilter, {nullable:true})
    Appointment_Appointment_masterProfileToMasterProfile?: AppointmentListRelationFilter;

    @Field(() => AppointmentListRelationFilter, {nullable:true})
    Appointment_Appointment_masterServiceToMasterProfile?: AppointmentListRelationFilter;

    @Field(() => MasterWeeklyScheduleRelationFilter, {nullable:true})
    MasterWeeklySchedule?: MasterWeeklyScheduleRelationFilter;

    @Field(() => MasterScheduleListRelationFilter, {nullable:true})
    MasterSchedule?: MasterScheduleListRelationFilter;

    @Field(() => MasterServiceListRelationFilter, {nullable:true})
    MasterService?: MasterServiceListRelationFilter;

    @Field(() => UserListRelationFilter, {nullable:true})
    User?: UserListRelationFilter;
}
