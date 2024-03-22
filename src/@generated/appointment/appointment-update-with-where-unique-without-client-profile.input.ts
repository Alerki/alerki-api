import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';
import { Type } from 'class-transformer';
import { AppointmentUpdateWithoutClientProfileInput } from './appointment-update-without-client-profile.input';

@InputType()
export class AppointmentUpdateWithWhereUniqueWithoutClientProfileInput {

    @Field(() => AppointmentWhereUniqueInput, {nullable:false})
    @Type(() => AppointmentWhereUniqueInput)
    where!: Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>;

    @Field(() => AppointmentUpdateWithoutClientProfileInput, {nullable:false})
    @Type(() => AppointmentUpdateWithoutClientProfileInput)
    data!: AppointmentUpdateWithoutClientProfileInput;
}
