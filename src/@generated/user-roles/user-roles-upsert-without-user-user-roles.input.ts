import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRolesUpdateWithoutUser_UserRolesInput } from './user-roles-update-without-user-user-roles.input';
import { Type } from 'class-transformer';
import { UserRolesCreateWithoutUser_UserRolesInput } from './user-roles-create-without-user-user-roles.input';

@InputType()
export class UserRolesUpsertWithoutUser_UserRolesInput {
  @Field(() => UserRolesUpdateWithoutUser_UserRolesInput, { nullable: false })
  @Type(() => UserRolesUpdateWithoutUser_UserRolesInput)
  update!: UserRolesUpdateWithoutUser_UserRolesInput;

  @Field(() => UserRolesCreateWithoutUser_UserRolesInput, { nullable: false })
  @Type(() => UserRolesCreateWithoutUser_UserRolesInput)
  create!: UserRolesCreateWithoutUser_UserRolesInput;
}
