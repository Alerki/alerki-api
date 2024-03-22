import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MasterProfileCount {

    @Field(() => Int, {nullable:false})
    Appointment_Appointment_masterProfileToMasterProfile?: number;

    @Field(() => Int, {nullable:false})
    Appointment_Appointment_masterServiceToMasterProfile?: number;

    @Field(() => Int, {nullable:false})
    MasterSchedule?: number;

    @Field(() => Int, {nullable:false})
    MasterService?: number;

    @Field(() => Int, {nullable:false})
    User?: number;
}
