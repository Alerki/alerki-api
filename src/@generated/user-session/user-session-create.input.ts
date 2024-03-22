import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionCreateNestedOneWithoutUser_SessionInput } from '../session/session-create-nested-one-without-user-session.input';
import { UserCreateNestedOneWithoutUser_SessionInput } from '../user/user-create-nested-one-without-user-session.input';

@InputType()
export class User_SessionCreateInput {

    @Field(() => SessionCreateNestedOneWithoutUser_SessionInput, {nullable:true})
    Session?: SessionCreateNestedOneWithoutUser_SessionInput;

    @Field(() => UserCreateNestedOneWithoutUser_SessionInput, {nullable:true})
    User?: UserCreateNestedOneWithoutUser_SessionInput;
}
