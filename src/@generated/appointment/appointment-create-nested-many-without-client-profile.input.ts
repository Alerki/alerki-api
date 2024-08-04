import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentCreateWithoutClientProfileInput } from './appointment-create-without-client-profile.input';
import { Type } from 'class-transformer';
import { AppointmentCreateOrConnectWithoutClientProfileInput } from './appointment-create-or-connect-without-client-profile.input';
import { AppointmentCreateManyClientProfileInputEnvelope } from './appointment-create-many-client-profile-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';

@InputType()
export class AppointmentCreateNestedManyWithoutClientProfileInput {
  @Field(() => [AppointmentCreateWithoutClientProfileInput], { nullable: true })
  @Type(() => AppointmentCreateWithoutClientProfileInput)
  create?: Array<AppointmentCreateWithoutClientProfileInput>;

  @Field(() => [AppointmentCreateOrConnectWithoutClientProfileInput], {
    nullable: true,
  })
  @Type(() => AppointmentCreateOrConnectWithoutClientProfileInput)
  connectOrCreate?: Array<AppointmentCreateOrConnectWithoutClientProfileInput>;

  @Field(() => AppointmentCreateManyClientProfileInputEnvelope, {
    nullable: true,
  })
  @Type(() => AppointmentCreateManyClientProfileInputEnvelope)
  createMany?: AppointmentCreateManyClientProfileInputEnvelope;

  @Field(() => [AppointmentWhereUniqueInput], { nullable: true })
  @Type(() => AppointmentWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>>;
}
