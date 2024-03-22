import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CurrencyCreateWithoutAppointmentInput } from './currency-create-without-appointment.input';
import { Type } from 'class-transformer';
import { CurrencyCreateOrConnectWithoutAppointmentInput } from './currency-create-or-connect-without-appointment.input';
import { CurrencyUpsertWithoutAppointmentInput } from './currency-upsert-without-appointment.input';
import { Prisma } from '@prisma/client';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { CurrencyUpdateWithoutAppointmentInput } from './currency-update-without-appointment.input';

@InputType()
export class CurrencyUpdateOneRequiredWithoutAppointmentNestedInput {

    @Field(() => CurrencyCreateWithoutAppointmentInput, {nullable:true})
    @Type(() => CurrencyCreateWithoutAppointmentInput)
    create?: CurrencyCreateWithoutAppointmentInput;

    @Field(() => CurrencyCreateOrConnectWithoutAppointmentInput, {nullable:true})
    @Type(() => CurrencyCreateOrConnectWithoutAppointmentInput)
    connectOrCreate?: CurrencyCreateOrConnectWithoutAppointmentInput;

    @Field(() => CurrencyUpsertWithoutAppointmentInput, {nullable:true})
    @Type(() => CurrencyUpsertWithoutAppointmentInput)
    upsert?: CurrencyUpsertWithoutAppointmentInput;

    @Field(() => CurrencyWhereUniqueInput, {nullable:true})
    @Type(() => CurrencyWhereUniqueInput)
    connect?: Prisma.AtLeast<CurrencyWhereUniqueInput, 'id' | 'code'>;

    @Field(() => CurrencyUpdateWithoutAppointmentInput, {nullable:true})
    @Type(() => CurrencyUpdateWithoutAppointmentInput)
    update?: CurrencyUpdateWithoutAppointmentInput;
}
