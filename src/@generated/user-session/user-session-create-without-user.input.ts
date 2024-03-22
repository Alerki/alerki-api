import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionCreateNestedOneWithoutUser_SessionInput } from '../session/session-create-nested-one-without-user-session.input';

@InputType()
export class User_SessionCreateWithoutUserInput {

    @Field(() => SessionCreateNestedOneWithoutUser_SessionInput, {nullable:true})
    Session?: SessionCreateNestedOneWithoutUser_SessionInput;
}
