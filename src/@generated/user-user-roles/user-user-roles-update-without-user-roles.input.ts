import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutUser_UserRolesNestedInput } from '../user/user-update-one-required-without-user-user-roles-nested.input';

@InputType()
export class User_UserRolesUpdateWithoutUserRolesInput {
  @Field(() => UserUpdateOneRequiredWithoutUser_UserRolesNestedInput, {
    nullable: true,
  })
  User?: UserUpdateOneRequiredWithoutUser_UserRolesNestedInput;
}
