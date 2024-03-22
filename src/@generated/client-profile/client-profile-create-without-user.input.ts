import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentCreateNestedManyWithoutClientProfileInput } from '../appointment/appointment-create-nested-many-without-client-profile.input';

@InputType()
export class ClientProfileCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => AppointmentCreateNestedManyWithoutClientProfileInput, {nullable:true})
    Appointment?: AppointmentCreateNestedManyWithoutClientProfileInput;
}
