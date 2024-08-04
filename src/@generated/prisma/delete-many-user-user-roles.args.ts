import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { User_UserRolesWhereInput } from '../user-user-roles/user-user-roles-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyUserUserRolesArgs {
  @Field(() => User_UserRolesWhereInput, { nullable: true })
  @Type(() => User_UserRolesWhereInput)
  where?: User_UserRolesWhereInput;
}
