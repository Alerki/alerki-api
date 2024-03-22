import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionUpdateOneWithoutUser_SessionNestedInput } from '../session/session-update-one-without-user-session-nested.input';

@InputType()
export class User_SessionUpdateWithoutUserInput {

    @Field(() => SessionUpdateOneWithoutUser_SessionNestedInput, {nullable:true})
    Session?: SessionUpdateOneWithoutUser_SessionNestedInput;
}
