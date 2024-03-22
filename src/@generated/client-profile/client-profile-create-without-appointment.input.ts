import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedManyWithoutClientProfileInput } from '../user/user-create-nested-many-without-client-profile.input';

@InputType()
export class ClientProfileCreateWithoutAppointmentInput {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => Date, {nullable:true})
    date_created?: Date | string;

    @Field(() => Date, {nullable:true})
    date_updated?: Date | string;

    @Field(() => UserCreateNestedManyWithoutClientProfileInput, {nullable:true})
    User?: UserCreateNestedManyWithoutClientProfileInput;
}
