import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUncheckedCreateNestedManyWithoutClientProfileInput } from '../user/user-unchecked-create-nested-many-without-client-profile.input';

@InputType()
export class ClientProfileUncheckedCreateWithoutAppointmentInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => UserUncheckedCreateNestedManyWithoutClientProfileInput, {nullable:true})
    User?: UserUncheckedCreateNestedManyWithoutClientProfileInput;
}
