import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppointmentUpdateInput } from './appointment-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';

@ArgsType()
export class UpdateOneAppointmentArgs {

    @Field(() => AppointmentUpdateInput, {nullable:false})
    @Type(() => AppointmentUpdateInput)
    data!: AppointmentUpdateInput;

    @Field(() => AppointmentWhereUniqueInput, {nullable:false})
    @Type(() => AppointmentWhereUniqueInput)
    where!: Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>;
}
