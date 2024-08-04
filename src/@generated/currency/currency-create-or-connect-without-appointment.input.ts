import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { Type } from 'class-transformer';
import { CurrencyCreateWithoutAppointmentInput } from './currency-create-without-appointment.input';

@InputType()
export class CurrencyCreateOrConnectWithoutAppointmentInput {
  @Field(() => CurrencyWhereUniqueInput, { nullable: false })
  @Type(() => CurrencyWhereUniqueInput)
  where!: Prisma.AtLeast<CurrencyWhereUniqueInput, 'id' | 'code'>;

  @Field(() => CurrencyCreateWithoutAppointmentInput, { nullable: false })
  @Type(() => CurrencyCreateWithoutAppointmentInput)
  create!: CurrencyCreateWithoutAppointmentInput;
}
