import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyUpdateWithoutAppointmentInput } from './currency-update-without-appointment.input';
import { Type } from 'class-transformer';
import { CurrencyCreateWithoutAppointmentInput } from './currency-create-without-appointment.input';

@InputType()
export class CurrencyUpsertWithoutAppointmentInput {
  @Field(() => CurrencyUpdateWithoutAppointmentInput, { nullable: false })
  @Type(() => CurrencyUpdateWithoutAppointmentInput)
  update!: CurrencyUpdateWithoutAppointmentInput;

  @Field(() => CurrencyCreateWithoutAppointmentInput, { nullable: false })
  @Type(() => CurrencyCreateWithoutAppointmentInput)
  create!: CurrencyCreateWithoutAppointmentInput;
}
