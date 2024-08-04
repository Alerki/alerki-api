import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileCreateWithoutAppointment_Appointment_masterProfileToMasterProfileInput } from './master-profile-create-without-appointment-appointment-master-profile-to-master-profile.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateOrConnectWithoutAppointment_Appointment_masterProfileToMasterProfileInput } from './master-profile-create-or-connect-without-appointment-appointment-master-profile-to-master-profile.input';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';

@InputType()
export class MasterProfileCreateNestedOneWithoutAppointment_Appointment_masterProfileToMasterProfileInput {
  @Field(
    () =>
      MasterProfileCreateWithoutAppointment_Appointment_masterProfileToMasterProfileInput,
    { nullable: true },
  )
  @Type(
    () =>
      MasterProfileCreateWithoutAppointment_Appointment_masterProfileToMasterProfileInput,
  )
  create?: MasterProfileCreateWithoutAppointment_Appointment_masterProfileToMasterProfileInput;

  @Field(
    () =>
      MasterProfileCreateOrConnectWithoutAppointment_Appointment_masterProfileToMasterProfileInput,
    { nullable: true },
  )
  @Type(
    () =>
      MasterProfileCreateOrConnectWithoutAppointment_Appointment_masterProfileToMasterProfileInput,
  )
  connectOrCreate?: MasterProfileCreateOrConnectWithoutAppointment_Appointment_masterProfileToMasterProfileInput;

  @Field(() => MasterProfileWhereUniqueInput, { nullable: true })
  @Type(() => MasterProfileWhereUniqueInput)
  connect?: Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>;
}
