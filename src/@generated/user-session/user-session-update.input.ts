import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionUpdateOneRequiredWithoutUser_SessionNestedInput } from '../session/session-update-one-required-without-user-session-nested.input';
import { UserUpdateOneRequiredWithoutUser_SessionNestedInput } from '../user/user-update-one-required-without-user-session-nested.input';

@InputType()
export class User_SessionUpdateInput {
  @Field(() => SessionUpdateOneRequiredWithoutUser_SessionNestedInput, {
    nullable: true,
  })
  Session?: SessionUpdateOneRequiredWithoutUser_SessionNestedInput;

  @Field(() => UserUpdateOneRequiredWithoutUser_SessionNestedInput, {
    nullable: true,
  })
  User?: UserUpdateOneRequiredWithoutUser_SessionNestedInput;
}
