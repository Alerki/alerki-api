import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';
import { Type } from 'class-transformer';
import { AppointmentUpdateWithoutCurrencyInput } from './appointment-update-without-currency.input';
import { AppointmentCreateWithoutCurrencyInput } from './appointment-create-without-currency.input';

@InputType()
export class AppointmentUpsertWithWhereUniqueWithoutCurrencyInput {
  @Field(() => AppointmentWhereUniqueInput, { nullable: false })
  @Type(() => AppointmentWhereUniqueInput)
  where!: Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>;

  @Field(() => AppointmentUpdateWithoutCurrencyInput, { nullable: false })
  @Type(() => AppointmentUpdateWithoutCurrencyInput)
  update!: AppointmentUpdateWithoutCurrencyInput;

  @Field(() => AppointmentCreateWithoutCurrencyInput, { nullable: false })
  @Type(() => AppointmentCreateWithoutCurrencyInput)
  create!: AppointmentCreateWithoutCurrencyInput;
}
