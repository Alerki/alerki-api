import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentWhereInput } from './appointment-where.input';

@InputType()
export class AppointmentListRelationFilter {
  @Field(() => AppointmentWhereInput, { nullable: true })
  every?: AppointmentWhereInput;

  @Field(() => AppointmentWhereInput, { nullable: true })
  some?: AppointmentWhereInput;

  @Field(() => AppointmentWhereInput, { nullable: true })
  none?: AppointmentWhereInput;
}
