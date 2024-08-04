import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileUpdateWithoutAppointment_Appointment_masterProfileToMasterProfileInput } from './master-profile-update-without-appointment-appointment-master-profile-to-master-profile.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateWithoutAppointment_Appointment_masterProfileToMasterProfileInput } from './master-profile-create-without-appointment-appointment-master-profile-to-master-profile.input';

@InputType()
export class MasterProfileUpsertWithoutAppointment_Appointment_masterProfileToMasterProfileInput {
  @Field(
    () =>
      MasterProfileUpdateWithoutAppointment_Appointment_masterProfileToMasterProfileInput,
    { nullable: false },
  )
  @Type(
    () =>
      MasterProfileUpdateWithoutAppointment_Appointment_masterProfileToMasterProfileInput,
  )
  update!: MasterProfileUpdateWithoutAppointment_Appointment_masterProfileToMasterProfileInput;

  @Field(
    () =>
      MasterProfileCreateWithoutAppointment_Appointment_masterProfileToMasterProfileInput,
    { nullable: false },
  )
  @Type(
    () =>
      MasterProfileCreateWithoutAppointment_Appointment_masterProfileToMasterProfileInput,
  )
  create!: MasterProfileCreateWithoutAppointment_Appointment_masterProfileToMasterProfileInput;
}
