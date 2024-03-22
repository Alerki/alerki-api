import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentCreateWithoutCurrencyInput } from './appointment-create-without-currency.input';
import { Type } from 'class-transformer';
import { AppointmentCreateOrConnectWithoutCurrencyInput } from './appointment-create-or-connect-without-currency.input';
import { AppointmentCreateManyCurrencyInputEnvelope } from './appointment-create-many-currency-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';

@InputType()
export class AppointmentUncheckedCreateNestedManyWithoutCurrencyInput {

    @Field(() => [AppointmentCreateWithoutCurrencyInput], {nullable:true})
    @Type(() => AppointmentCreateWithoutCurrencyInput)
    create?: Array<AppointmentCreateWithoutCurrencyInput>;

    @Field(() => [AppointmentCreateOrConnectWithoutCurrencyInput], {nullable:true})
    @Type(() => AppointmentCreateOrConnectWithoutCurrencyInput)
    connectOrCreate?: Array<AppointmentCreateOrConnectWithoutCurrencyInput>;

    @Field(() => AppointmentCreateManyCurrencyInputEnvelope, {nullable:true})
    @Type(() => AppointmentCreateManyCurrencyInputEnvelope)
    createMany?: AppointmentCreateManyCurrencyInputEnvelope;

    @Field(() => [AppointmentWhereUniqueInput], {nullable:true})
    @Type(() => AppointmentWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>>;
}
