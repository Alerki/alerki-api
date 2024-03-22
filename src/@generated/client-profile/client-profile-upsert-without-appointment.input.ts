import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ClientProfileUpdateWithoutAppointmentInput } from './client-profile-update-without-appointment.input';
import { Type } from 'class-transformer';
import { ClientProfileCreateWithoutAppointmentInput } from './client-profile-create-without-appointment.input';

@InputType()
export class ClientProfileUpsertWithoutAppointmentInput {

    @Field(() => ClientProfileUpdateWithoutAppointmentInput, {nullable:false})
    @Type(() => ClientProfileUpdateWithoutAppointmentInput)
    update!: ClientProfileUpdateWithoutAppointmentInput;

    @Field(() => ClientProfileCreateWithoutAppointmentInput, {nullable:false})
    @Type(() => ClientProfileCreateWithoutAppointmentInput)
    create!: ClientProfileCreateWithoutAppointmentInput;
}
