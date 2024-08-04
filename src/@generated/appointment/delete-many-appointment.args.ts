import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppointmentWhereInput } from './appointment-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyAppointmentArgs {
  @Field(() => AppointmentWhereInput, { nullable: true })
  @Type(() => AppointmentWhereInput)
  where?: AppointmentWhereInput;
}
