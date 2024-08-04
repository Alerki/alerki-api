import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUser_UserRolesInput } from './user-update-without-user-user-roles.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUser_UserRolesInput } from './user-create-without-user-user-roles.input';

@InputType()
export class UserUpsertWithoutUser_UserRolesInput {
  @Field(() => UserUpdateWithoutUser_UserRolesInput, { nullable: false })
  @Type(() => UserUpdateWithoutUser_UserRolesInput)
  update!: UserUpdateWithoutUser_UserRolesInput;

  @Field(() => UserCreateWithoutUser_UserRolesInput, { nullable: false })
  @Type(() => UserCreateWithoutUser_UserRolesInput)
  create!: UserCreateWithoutUser_UserRolesInput;
}
