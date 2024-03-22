import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueAppointmentOrThrowArgs {

    @Field(() => AppointmentWhereUniqueInput, {nullable:false})
    @Type(() => AppointmentWhereUniqueInput)
    where!: Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>;
}
