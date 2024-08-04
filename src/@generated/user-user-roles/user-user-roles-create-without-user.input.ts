import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRolesCreateNestedOneWithoutUser_UserRolesInput } from '../user-roles/user-roles-create-nested-one-without-user-user-roles.input';

@InputType()
export class User_UserRolesCreateWithoutUserInput {
  @Field(() => UserRolesCreateNestedOneWithoutUser_UserRolesInput, {
    nullable: false,
  })
  UserRoles!: UserRolesCreateNestedOneWithoutUser_UserRolesInput;
}
