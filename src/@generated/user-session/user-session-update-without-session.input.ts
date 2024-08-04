import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutUser_SessionNestedInput } from '../user/user-update-one-required-without-user-session-nested.input';

@InputType()
export class User_SessionUpdateWithoutSessionInput {
  @Field(() => UserUpdateOneRequiredWithoutUser_SessionNestedInput, {
    nullable: true,
  })
  User?: UserUpdateOneRequiredWithoutUser_SessionNestedInput;
}
