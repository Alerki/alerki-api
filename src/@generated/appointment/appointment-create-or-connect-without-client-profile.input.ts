import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';
import { Type } from 'class-transformer';
import { AppointmentCreateWithoutClientProfileInput } from './appointment-create-without-client-profile.input';

@InputType()
export class AppointmentCreateOrConnectWithoutClientProfileInput {

    @Field(() => AppointmentWhereUniqueInput, {nullable:false})
    @Type(() => AppointmentWhereUniqueInput)
    where!: Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>;

    @Field(() => AppointmentCreateWithoutClientProfileInput, {nullable:false})
    @Type(() => AppointmentCreateWithoutClientProfileInput)
    create!: AppointmentCreateWithoutClientProfileInput;
}
