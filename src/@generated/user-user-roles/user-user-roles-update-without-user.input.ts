import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRolesUpdateOneRequiredWithoutUser_UserRolesNestedInput } from '../user-roles/user-roles-update-one-required-without-user-user-roles-nested.input';

@InputType()
export class User_UserRolesUpdateWithoutUserInput {
  @Field(() => UserRolesUpdateOneRequiredWithoutUser_UserRolesNestedInput, {
    nullable: true,
  })
  UserRoles?: UserRolesUpdateOneRequiredWithoutUser_UserRolesNestedInput;
}
