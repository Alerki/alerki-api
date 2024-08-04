import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUser_SessionInput } from '../user/user-create-nested-one-without-user-session.input';

@InputType()
export class User_SessionCreateWithoutSessionInput {
  @Field(() => UserCreateNestedOneWithoutUser_SessionInput, { nullable: false })
  User!: UserCreateNestedOneWithoutUser_SessionInput;
}
