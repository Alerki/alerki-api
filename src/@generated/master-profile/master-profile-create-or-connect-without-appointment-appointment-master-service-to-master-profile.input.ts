import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateWithoutAppointment_Appointment_masterServiceToMasterProfileInput } from './master-profile-create-without-appointment-appointment-master-service-to-master-profile.input';

@InputType()
export class MasterProfileCreateOrConnectWithoutAppointment_Appointment_masterServiceToMasterProfileInput {

    @Field(() => MasterProfileWhereUniqueInput, {nullable:false})
    @Type(() => MasterProfileWhereUniqueInput)
    where!: Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>;

    @Field(() => MasterProfileCreateWithoutAppointment_Appointment_masterServiceToMasterProfileInput, {nullable:false})
    @Type(() => MasterProfileCreateWithoutAppointment_Appointment_masterServiceToMasterProfileInput)
    create!: MasterProfileCreateWithoutAppointment_Appointment_masterServiceToMasterProfileInput;
}
