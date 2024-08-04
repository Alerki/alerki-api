import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUser_UserRolesInput } from '../user/user-create-nested-one-without-user-user-roles.input';

@InputType()
export class User_UserRolesCreateWithoutUserRolesInput {
  @Field(() => UserCreateNestedOneWithoutUser_UserRolesInput, {
    nullable: false,
  })
  User!: UserCreateNestedOneWithoutUser_UserRolesInput;
}
