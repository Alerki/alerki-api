import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppointmentUpdateManyMutationInput } from './appointment-update-many-mutation.input';
import { Type } from 'class-transformer';
import { AppointmentWhereInput } from './appointment-where.input';

@ArgsType()
export class UpdateManyAppointmentArgs {
  @Field(() => AppointmentUpdateManyMutationInput, { nullable: false })
  @Type(() => AppointmentUpdateManyMutationInput)
  data!: AppointmentUpdateManyMutationInput;

  @Field(() => AppointmentWhereInput, { nullable: true })
  @Type(() => AppointmentWhereInput)
  where?: AppointmentWhereInput;
}
