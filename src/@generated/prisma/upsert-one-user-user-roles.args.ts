import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { User_UserRolesWhereUniqueInput } from '../user-user-roles/user-user-roles-where-unique.input';
import { Type } from 'class-transformer';
import { User_UserRolesCreateInput } from '../user-user-roles/user-user-roles-create.input';
import { User_UserRolesUpdateInput } from '../user-user-roles/user-user-roles-update.input';

@ArgsType()
export class UpsertOneUserUserRolesArgs {
  @Field(() => User_UserRolesWhereUniqueInput, { nullable: false })
  @Type(() => User_UserRolesWhereUniqueInput)
  where!: User_UserRolesWhereUniqueInput;

  @Field(() => User_UserRolesCreateInput, { nullable: false })
  @Type(() => User_UserRolesCreateInput)
  create!: User_UserRolesCreateInput;

  @Field(() => User_UserRolesUpdateInput, { nullable: false })
  @Type(() => User_UserRolesUpdateInput)
  update!: User_UserRolesUpdateInput;
}
