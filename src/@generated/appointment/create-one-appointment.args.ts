import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppointmentCreateInput } from './appointment-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAppointmentArgs {

    @Field(() => AppointmentCreateInput, {nullable:false})
    @Type(() => AppointmentCreateInput)
    data!: AppointmentCreateInput;
}
