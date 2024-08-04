import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';
import { Type } from 'class-transformer';
import { AppointmentUpdateWithoutCurrencyInput } from './appointment-update-without-currency.input';

@InputType()
export class AppointmentUpdateWithWhereUniqueWithoutCurrencyInput {
  @Field(() => AppointmentWhereUniqueInput, { nullable: false })
  @Type(() => AppointmentWhereUniqueInput)
  where!: Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>;

  @Field(() => AppointmentUpdateWithoutCurrencyInput, { nullable: false })
  @Type(() => AppointmentUpdateWithoutCurrencyInput)
  data!: AppointmentUpdateWithoutCurrencyInput;
}
