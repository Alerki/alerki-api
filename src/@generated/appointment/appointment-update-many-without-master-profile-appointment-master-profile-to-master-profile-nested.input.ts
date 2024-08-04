import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentCreateWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput } from './appointment-create-without-master-profile-appointment-master-profile-to-master-profile.input';
import { Type } from 'class-transformer';
import { AppointmentCreateOrConnectWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput } from './appointment-create-or-connect-without-master-profile-appointment-master-profile-to-master-profile.input';
import { AppointmentUpsertWithWhereUniqueWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput } from './appointment-upsert-with-where-unique-without-master-profile-appointment-master-profile-to-master-profile.input';
import { AppointmentCreateManyMasterProfile_Appointment_masterProfileToMasterProfileInputEnvelope } from './appointment-create-many-master-profile-appointment-master-profile-to-master-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';
import { AppointmentUpdateWithWhereUniqueWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput } from './appointment-update-with-where-unique-without-master-profile-appointment-master-profile-to-master-profile.input';
import { AppointmentUpdateManyWithWhereWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput } from './appointment-update-many-with-where-without-master-profile-appointment-master-profile-to-master-profile.input';
import { AppointmentScalarWhereInput } from './appointment-scalar-where.input';

@InputType()
export class AppointmentUpdateManyWithoutMasterProfile_Appointment_masterProfileToMasterProfileNestedInput {
  @Field(
    () => [
      AppointmentCreateWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      AppointmentCreateWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput,
  )
  create?: Array<AppointmentCreateWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput>;

  @Field(
    () => [
      AppointmentCreateOrConnectWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      AppointmentCreateOrConnectWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput,
  )
  connectOrCreate?: Array<AppointmentCreateOrConnectWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput>;

  @Field(
    () => [
      AppointmentUpsertWithWhereUniqueWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      AppointmentUpsertWithWhereUniqueWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput,
  )
  upsert?: Array<AppointmentUpsertWithWhereUniqueWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput>;

  @Field(
    () =>
      AppointmentCreateManyMasterProfile_Appointment_masterProfileToMasterProfileInputEnvelope,
    { nullable: true },
  )
  @Type(
    () =>
      AppointmentCreateManyMasterProfile_Appointment_masterProfileToMasterProfileInputEnvelope,
  )
  createMany?: AppointmentCreateManyMasterProfile_Appointment_masterProfileToMasterProfileInputEnvelope;

  @Field(() => [AppointmentWhereUniqueInput], { nullable: true })
  @Type(() => AppointmentWhereUniqueInput)
  set?: Array<Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>>;

  @Field(() => [AppointmentWhereUniqueInput], { nullable: true })
  @Type(() => AppointmentWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>>;

  @Field(() => [AppointmentWhereUniqueInput], { nullable: true })
  @Type(() => AppointmentWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>>;

  @Field(() => [AppointmentWhereUniqueInput], { nullable: true })
  @Type(() => AppointmentWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>>;

  @Field(
    () => [
      AppointmentUpdateWithWhereUniqueWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      AppointmentUpdateWithWhereUniqueWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput,
  )
  update?: Array<AppointmentUpdateWithWhereUniqueWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput>;

  @Field(
    () => [
      AppointmentUpdateManyWithWhereWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput,
    ],
    { nullable: true },
  )
  @Type(
    () =>
      AppointmentUpdateManyWithWhereWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput,
  )
  updateMany?: Array<AppointmentUpdateManyWithWhereWithoutMasterProfile_Appointment_masterProfileToMasterProfileInput>;

  @Field(() => [AppointmentScalarWhereInput], { nullable: true })
  @Type(() => AppointmentScalarWhereInput)
  deleteMany?: Array<AppointmentScalarWhereInput>;
}
