import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppointmentUncheckedCreateNestedManyWithoutClientProfileInput } from '../appointment/appointment-unchecked-create-nested-many-without-client-profile.input';
import { UserUncheckedCreateNestedManyWithoutClientProfileInput } from '../user/user-unchecked-create-nested-many-without-client-profile.input';

@InputType()
export class ClientProfileUncheckedCreateInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => AppointmentUncheckedCreateNestedManyWithoutClientProfileInput, {nullable:true})
    Appointment?: AppointmentUncheckedCreateNestedManyWithoutClientProfileInput;

    @Field(() => UserUncheckedCreateNestedManyWithoutClientProfileInput, {nullable:true})
    User?: UserUncheckedCreateNestedManyWithoutClientProfileInput;
}
