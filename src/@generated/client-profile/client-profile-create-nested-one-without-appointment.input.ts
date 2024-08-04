import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientProfileCreateWithoutAppointmentInput } from './client-profile-create-without-appointment.input';
import { Type } from 'class-transformer';
import { ClientProfileCreateOrConnectWithoutAppointmentInput } from './client-profile-create-or-connect-without-appointment.input';
import { Prisma } from '@prisma/client';
import { ClientProfileWhereUniqueInput } from './client-profile-where-unique.input';

@InputType()
export class ClientProfileCreateNestedOneWithoutAppointmentInput {
  @Field(() => ClientProfileCreateWithoutAppointmentInput, { nullable: true })
  @Type(() => ClientProfileCreateWithoutAppointmentInput)
  create?: ClientProfileCreateWithoutAppointmentInput;

  @Field(() => ClientProfileCreateOrConnectWithoutAppointmentInput, {
    nullable: true,
  })
  @Type(() => ClientProfileCreateOrConnectWithoutAppointmentInput)
  connectOrCreate?: ClientProfileCreateOrConnectWithoutAppointmentInput;

  @Field(() => ClientProfileWhereUniqueInput, { nullable: true })
  @Type(() => ClientProfileWhereUniqueInput)
  connect?: Prisma.AtLeast<ClientProfileWhereUniqueInput, 'id'>;
}
