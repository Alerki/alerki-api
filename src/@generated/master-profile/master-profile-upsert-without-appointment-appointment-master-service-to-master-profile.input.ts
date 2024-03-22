import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileUpdateWithoutAppointment_Appointment_masterServiceToMasterProfileInput } from './master-profile-update-without-appointment-appointment-master-service-to-master-profile.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateWithoutAppointment_Appointment_masterServiceToMasterProfileInput } from './master-profile-create-without-appointment-appointment-master-service-to-master-profile.input';

@InputType()
export class MasterProfileUpsertWithoutAppointment_Appointment_masterServiceToMasterProfileInput {

    @Field(() => MasterProfileUpdateWithoutAppointment_Appointment_masterServiceToMasterProfileInput, {nullable:false})
    @Type(() => MasterProfileUpdateWithoutAppointment_Appointment_masterServiceToMasterProfileInput)
    update!: MasterProfileUpdateWithoutAppointment_Appointment_masterServiceToMasterProfileInput;

    @Field(() => MasterProfileCreateWithoutAppointment_Appointment_masterServiceToMasterProfileInput, {nullable:false})
    @Type(() => MasterProfileCreateWithoutAppointment_Appointment_masterServiceToMasterProfileInput)
    create!: MasterProfileCreateWithoutAppointment_Appointment_masterServiceToMasterProfileInput;
}
