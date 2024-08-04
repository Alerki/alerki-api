import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { User_UserRolesUpdateInput } from '../user-user-roles/user-user-roles-update.input';
import { Type } from 'class-transformer';
import { User_UserRolesWhereUniqueInput } from '../user-user-roles/user-user-roles-where-unique.input';

@ArgsType()
export class UpdateOneUserUserRolesArgs {
  @Field(() => User_UserRolesUpdateInput, { nullable: false })
  @Type(() => User_UserRolesUpdateInput)
  data!: User_UserRolesUpdateInput;

  @Field(() => User_UserRolesWhereUniqueInput, { nullable: false })
  @Type(() => User_UserRolesWhereUniqueInput)
  where!: User_UserRolesWhereUniqueInput;
}
