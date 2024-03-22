import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';
import { Type } from 'class-transformer';
import { AppointmentCreateInput } from './appointment-create.input';
import { AppointmentUpdateInput } from './appointment-update.input';

@ArgsType()
export class UpsertOneAppointmentArgs {

    @Field(() => AppointmentWhereUniqueInput, {nullable:false})
    @Type(() => AppointmentWhereUniqueInput)
    where!: Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>;

    @Field(() => AppointmentCreateInput, {nullable:false})
    @Type(() => AppointmentCreateInput)
    create!: AppointmentCreateInput;

    @Field(() => AppointmentUpdateInput, {nullable:false})
    @Type(() => AppointmentUpdateInput)
    update!: AppointmentUpdateInput;
}
