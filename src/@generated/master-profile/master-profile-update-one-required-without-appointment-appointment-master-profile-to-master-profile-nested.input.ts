import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterProfileCreateWithoutAppointment_Appointment_masterProfileToMasterProfileInput } from './master-profile-create-without-appointment-appointment-master-profile-to-master-profile.input';
import { Type } from 'class-transformer';
import { MasterProfileCreateOrConnectWithoutAppointment_Appointment_masterProfileToMasterProfileInput } from './master-profile-create-or-connect-without-appointment-appointment-master-profile-to-master-profile.input';
import { MasterProfileUpsertWithoutAppointment_Appointment_masterProfileToMasterProfileInput } from './master-profile-upsert-without-appointment-appointment-master-profile-to-master-profile.input';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';
import { MasterProfileUpdateWithoutAppointment_Appointment_masterProfileToMasterProfileInput } from './master-profile-update-without-appointment-appointment-master-profile-to-master-profile.input';

@InputType()
export class MasterProfileUpdateOneRequiredWithoutAppointment_Appointment_masterProfileToMasterProfileNestedInput {
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

  @Field(
    () =>
      MasterProfileUpsertWithoutAppointment_Appointment_masterProfileToMasterProfileInput,
    { nullable: true },
  )
  @Type(
    () =>
      MasterProfileUpsertWithoutAppointment_Appointment_masterProfileToMasterProfileInput,
  )
  upsert?: MasterProfileUpsertWithoutAppointment_Appointment_masterProfileToMasterProfileInput;

  @Field(() => MasterProfileWhereUniqueInput, { nullable: true })
  @Type(() => MasterProfileWhereUniqueInput)
  connect?: Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>;

  @Field(
    () =>
      MasterProfileUpdateWithoutAppointment_Appointment_masterProfileToMasterProfileInput,
    { nullable: true },
  )
  @Type(
    () =>
      MasterProfileUpdateWithoutAppointment_Appointment_masterProfileToMasterProfileInput,
  )
  update?: MasterProfileUpdateWithoutAppointment_Appointment_masterProfileToMasterProfileInput;
}
