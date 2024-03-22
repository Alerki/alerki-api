import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';
import { Type } from 'class-transformer';
import { AppointmentCreateWithoutCurrencyInput } from './appointment-create-without-currency.input';

@InputType()
export class AppointmentCreateOrConnectWithoutCurrencyInput {

    @Field(() => AppointmentWhereUniqueInput, {nullable:false})
    @Type(() => AppointmentWhereUniqueInput)
    where!: Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>;

    @Field(() => AppointmentCreateWithoutCurrencyInput, {nullable:false})
    @Type(() => AppointmentCreateWithoutCurrencyInput)
    create!: AppointmentCreateWithoutCurrencyInput;
}
