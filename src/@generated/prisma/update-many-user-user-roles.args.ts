import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { User_UserRolesUncheckedUpdateManyInput } from '../user-user-roles/user-user-roles-unchecked-update-many.input';
import { Type } from 'class-transformer';
import { User_UserRolesWhereInput } from '../user-user-roles/user-user-roles-where.input';

@ArgsType()
export class UpdateManyUserUserRolesArgs {
  @Field(() => User_UserRolesUncheckedUpdateManyInput, { nullable: false })
  @Type(() => User_UserRolesUncheckedUpdateManyInput)
  data!: User_UserRolesUncheckedUpdateManyInput;

  @Field(() => User_UserRolesWhereInput, { nullable: true })
  @Type(() => User_UserRolesWhereInput)
  where?: User_UserRolesWhereInput;
}
