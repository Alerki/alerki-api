import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';
import { Type } from 'class-transformer';
import { AppointmentUpdateWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput } from './appointment-update-without-master-profile-appointment-master-service-to-master-profile.input';
import { AppointmentCreateWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput } from './appointment-create-without-master-profile-appointment-master-service-to-master-profile.input';

@InputType()
export class AppointmentUpsertWithWhereUniqueWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput {
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
  update!: AppointmentUpdateWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput;

  @Field(
    () =>
      AppointmentCreateWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput,
    { nullable: false },
  )
  @Type(
    () =>
      AppointmentCreateWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput,
  )
  create!: AppointmentCreateWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput;
}
