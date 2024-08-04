import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutUser_UserRolesNestedInput } from '../user/user-update-one-required-without-user-user-roles-nested.input';
import { UserRolesUpdateOneRequiredWithoutUser_UserRolesNestedInput } from '../user-roles/user-roles-update-one-required-without-user-user-roles-nested.input';

@InputType()
export class User_UserRolesUpdateInput {
  @Field(() => UserUpdateOneRequiredWithoutUser_UserRolesNestedInput, {
    nullable: true,
  })
  User?: UserUpdateOneRequiredWithoutUser_UserRolesNestedInput;

  @Field(() => UserRolesUpdateOneRequiredWithoutUser_UserRolesNestedInput, {
    nullable: true,
  })
  UserRoles?: UserRolesUpdateOneRequiredWithoutUser_UserRolesNestedInput;
}
