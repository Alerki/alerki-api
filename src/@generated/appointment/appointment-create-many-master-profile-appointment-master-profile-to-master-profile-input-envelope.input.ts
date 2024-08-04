import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentCreateManyMasterProfile_Appointment_masterProfileToMasterProfileInput } from './appointment-create-many-master-profile-appointment-master-profile-to-master-profile.input';
import { Type } from 'class-transformer';

@InputType()
export class AppointmentCreateManyMasterProfile_Appointment_masterProfileToMasterProfileInputEnvelope {
  @Field(
    () => [
      AppointmentCreateManyMasterProfile_Appointment_masterProfileToMasterProfileInput,
    ],
    { nullable: false },
  )
  @Type(
    () =>
      AppointmentCreateManyMasterProfile_Appointment_masterProfileToMasterProfileInput,
  )
  data!: Array<AppointmentCreateManyMasterProfile_Appointment_masterProfileToMasterProfileInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
