import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCreateWithoutAppointmentInput } from './currency-create-without-appointment.input';
import { Type } from 'class-transformer';
import { CurrencyCreateOrConnectWithoutAppointmentInput } from './currency-create-or-connect-without-appointment.input';
import { Prisma } from '@prisma/client';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';

@InputType()
export class CurrencyCreateNestedOneWithoutAppointmentInput {

    @Field(() => CurrencyCreateWithoutAppointmentInput, {nullable:true})
    @Type(() => CurrencyCreateWithoutAppointmentInput)
    create?: CurrencyCreateWithoutAppointmentInput;

    @Field(() => CurrencyCreateOrConnectWithoutAppointmentInput, {nullable:true})
    @Type(() => CurrencyCreateOrConnectWithoutAppointmentInput)
    connectOrCreate?: CurrencyCreateOrConnectWithoutAppointmentInput;

    @Field(() => CurrencyWhereUniqueInput, {nullable:true})
    @Type(() => CurrencyWhereUniqueInput)
    connect?: Prisma.AtLeast<CurrencyWhereUniqueInput, 'id' | 'code'>;
}
