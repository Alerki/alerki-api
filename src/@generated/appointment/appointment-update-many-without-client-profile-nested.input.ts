import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentCreateWithoutClientProfileInput } from './appointment-create-without-client-profile.input';
import { Type } from 'class-transformer';
import { AppointmentCreateOrConnectWithoutClientProfileInput } from './appointment-create-or-connect-without-client-profile.input';
import { AppointmentUpsertWithWhereUniqueWithoutClientProfileInput } from './appointment-upsert-with-where-unique-without-client-profile.input';
import { AppointmentCreateManyClientProfileInputEnvelope } from './appointment-create-many-client-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';
import { AppointmentUpdateWithWhereUniqueWithoutClientProfileInput } from './appointment-update-with-where-unique-without-client-profile.input';
import { AppointmentUpdateManyWithWhereWithoutClientProfileInput } from './appointment-update-many-with-where-without-client-profile.input';
import { AppointmentScalarWhereInput } from './appointment-scalar-where.input';

@InputType()
export class AppointmentUpdateManyWithoutClientProfileNestedInput {
  @Field(() => [AppointmentCreateWithoutClientProfileInput], { nullable: true })
  @Type(() => AppointmentCreateWithoutClientProfileInput)
  create?: Array<AppointmentCreateWithoutClientProfileInput>;

  @Field(() => [AppointmentCreateOrConnectWithoutClientProfileInput], {
    nullable: true,
  })
  @Type(() => AppointmentCreateOrConnectWithoutClientProfileInput)
  connectOrCreate?: Array<AppointmentCreateOrConnectWithoutClientProfileInput>;

  @Field(() => [AppointmentUpsertWithWhereUniqueWithoutClientProfileInput], {
    nullable: true,
  })
  @Type(() => AppointmentUpsertWithWhereUniqueWithoutClientProfileInput)
  upsert?: Array<AppointmentUpsertWithWhereUniqueWithoutClientProfileInput>;

  @Field(() => AppointmentCreateManyClientProfileInputEnvelope, {
    nullable: true,
  })
  @Type(() => AppointmentCreateManyClientProfileInputEnvelope)
  createMany?: AppointmentCreateManyClientProfileInputEnvelope;

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

  @Field(() => [AppointmentUpdateWithWhereUniqueWithoutClientProfileInput], {
    nullable: true,
  })
  @Type(() => AppointmentUpdateWithWhereUniqueWithoutClientProfileInput)
  update?: Array<AppointmentUpdateWithWhereUniqueWithoutClientProfileInput>;

  @Field(() => [AppointmentUpdateManyWithWhereWithoutClientProfileInput], {
    nullable: true,
  })
  @Type(() => AppointmentUpdateManyWithWhereWithoutClientProfileInput)
  updateMany?: Array<AppointmentUpdateManyWithWhereWithoutClientProfileInput>;

  @Field(() => [AppointmentScalarWhereInput], { nullable: true })
  @Type(() => AppointmentScalarWhereInput)
  deleteMany?: Array<AppointmentScalarWhereInput>;
}
