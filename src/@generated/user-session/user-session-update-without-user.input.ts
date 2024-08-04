import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SessionUpdateOneRequiredWithoutUser_SessionNestedInput } from '../session/session-update-one-required-without-user-session-nested.input';

@InputType()
export class User_SessionUpdateWithoutUserInput {
  @Field(() => SessionUpdateOneRequiredWithoutUser_SessionNestedInput, {
    nullable: true,
  })
  Session?: SessionUpdateOneRequiredWithoutUser_SessionNestedInput;
}
