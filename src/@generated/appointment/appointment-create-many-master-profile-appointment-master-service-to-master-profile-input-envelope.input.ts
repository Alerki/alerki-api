import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentCreateManyMasterProfile_Appointment_masterServiceToMasterProfileInput } from './appointment-create-many-master-profile-appointment-master-service-to-master-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class AppointmentCreateManyMasterProfile_Appointment_masterServiceToMasterProfileInputEnvelope {
  @Field(
    () => [
      AppointmentCreateManyMasterProfile_Appointment_masterServiceToMasterProfileInput,
    ],
    { nullable: false },
  )
  @Type(
    () =>
      AppointmentCreateManyMasterProfile_Appointment_masterServiceToMasterProfileInput,
  )
  data!: Array<AppointmentCreateManyMasterProfile_Appointment_masterServiceToMasterProfileInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
