import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';
import { Type } from 'class-transformer';
import { AppointmentCreateWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput } from './appointment-create-without-master-profile-appointment-master-service-to-master-profile.input';

@InputType()
export class AppointmentCreateOrConnectWithoutMasterProfile_Appointment_masterServiceToMasterProfileInput {
  @Field(() => AppointmentWhereUniqueInput, { nullable: false })
  @Type(() => AppointmentWhereUniqueInput)
  where!: Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>;

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
