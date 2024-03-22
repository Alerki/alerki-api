import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneWithoutUser_SessionNestedInput } from '../user/user-update-one-without-user-session-nested.input';

@InputType()
export class User_SessionUpdateWithoutSessionInput {

    @Field(() => UserUpdateOneWithoutUser_SessionNestedInput, {nullable:true})
    User?: UserUpdateOneWithoutUser_SessionNestedInput;
}
