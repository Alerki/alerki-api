import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';
import { Type } from 'class-transformer';
import { AppointmentUpdateWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput } from './appointment-update-without-master-profile-appointment-master-service-to-master-profile.input';

@InputType()
export class AppointmentUpdateWithWhereUniqueWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput {
  @Field(() => AppointmentWhereUniqueInput, { nullable: false })
  @Type(() => AppointmentWhereUniqueInput)
  where!: Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>;

  @Field(
    () =>
      AppointmentUpdateWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput,
    { nullable: false },
  )
  @Type(
    () =>
      AppointmentUpdateWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput,
  )
  data!: AppointmentUpdateWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput;
}
