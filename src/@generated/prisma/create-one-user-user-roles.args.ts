import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { User_UserRolesCreateInput } from '../user-user-roles/user-user-roles-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneUserUserRolesArgs {
  @Field(() => User_UserRolesCreateInput, { nullable: false })
  @Type(() => User_UserRolesCreateInput)
  data!: User_UserRolesCreateInput;
}
