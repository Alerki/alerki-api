import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { ClientProfileWhereUniqueInput } from './client-profile-where-unique.input';
import { Type } from 'class-transformer';
import { ClientProfileCreateWithoutAppointmentInput } from './client-profile-create-without-appointment.input';

@InputType()
export class ClientProfileCreateOrConnectWithoutAppointmentInput {
  @Field(() => ClientProfileWhereUniqueInput, { nullable: false })
  @Type(() => ClientProfileWhereUniqueInput)
  where!: Prisma.AtLeast<ClientProfileWhereUniqueInput, 'id'>;

  @Field(() => ClientProfileCreateWithoutAppointmentInput, { nullable: false })
  @Type(() => ClientProfileCreateWithoutAppointmentInput)
  create!: ClientProfileCreateWithoutAppointmentInput;
}
