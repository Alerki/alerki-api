import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Appointment } from '../appointment/appointment.model';
import { MasterWeeklySchedule } from '../master-weekly-schedule/master-weekly-schedule.model';
import { MasterSchedule } from '../master-schedule/master-schedule.model';
import { MasterService } from '../master-service/master-service.model';
import { User } from '../user/user.model';
import { MasterProfileCount } from './master-profile-count.output';

@ObjectType()
export class MasterProfile {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created!: Date | null;

    @Field(() => Date, {nullable:true})
    date_updated!: Date | null;

    @Field(() => String, {nullable:false})
    masterWeeklySchedule!: string;

    @Field(() => [Appointment], {nullable:true})
    Appointment_Appointment_masterProfileToMasterProfile?: Array<Appointment>;

    @Field(() => [Appointment], {nullable:true})
    Appointment_Appointment_masterServiceToMasterProfile?: Array<Appointment>;

    @Field(() => MasterWeeklySchedule, {nullable:false})
    MasterWeeklySchedule?: MasterWeeklySchedule;

    @Field(() => [MasterSchedule], {nullable:true})
    MasterSchedule?: Array<MasterSchedule>;

    @Field(() => [MasterService], {nullable:true})
    MasterService?: Array<MasterService>;

    @Field(() => [User], {nullable:true})
    User?: Array<User>;

    @Field(() => MasterProfileCount, {nullable:false})
    _count?: MasterProfileCount;
}
