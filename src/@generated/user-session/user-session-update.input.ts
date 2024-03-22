import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionUpdateOneWithoutUser_SessionNestedInput } from '../session/session-update-one-without-user-session-nested.input';
import { UserUpdateOneWithoutUser_SessionNestedInput } from '../user/user-update-one-without-user-session-nested.input';

@InputType()
export class User_SessionUpdateInput {

    @Field(() => SessionUpdateOneWithoutUser_SessionNestedInput, {nullable:true})
    Session?: SessionUpdateOneWithoutUser_SessionNestedInput;

    @Field(() => UserUpdateOneWithoutUser_SessionNestedInput, {nullable:true})
    User?: UserUpdateOneWithoutUser_SessionNestedInput;
}
