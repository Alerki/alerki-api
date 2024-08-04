import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUser_UserRolesInput } from '../user/user-create-nested-one-without-user-user-roles.input';
import { UserRolesCreateNestedOneWithoutUser_UserRolesInput } from '../user-roles/user-roles-create-nested-one-without-user-user-roles.input';

@InputType()
export class User_UserRolesCreateInput {
  @Field(() => UserCreateNestedOneWithoutUser_UserRolesInput, {
    nullable: false,
  })
  User!: UserCreateNestedOneWithoutUser_UserRolesInput;

  @Field(() => UserRolesCreateNestedOneWithoutUser_UserRolesInput, {
    nullable: false,
  })
  UserRoles!: UserRolesCreateNestedOneWithoutUser_UserRolesInput;
}
