import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentScalarWhereInput } from './appointment-scalar-where.input';
import { Type } from 'class-transformer';
import { AppointmentUpdateManyMutationInput } from './appointment-update-many-mutation.input';

@InputType()
export class AppointmentUpdateManyWithWhereWithoutCurrencyInput {

    @Field(() => AppointmentScalarWhereInput, {nullable:false})
    @Type(() => AppointmentScalarWhereInput)
    where!: AppointmentScalarWhereInput;

    @Field(() => AppointmentUpdateManyMutationInput, {nullable:false})
    @Type(() => AppointmentUpdateManyMutationInput)
    data!: AppointmentUpdateManyMutationInput;
}
