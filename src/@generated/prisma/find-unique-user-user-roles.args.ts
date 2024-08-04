import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { User_UserRolesWhereUniqueInput } from '../user-user-roles/user-user-roles-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueUserUserRolesArgs {
  @Field(() => User_UserRolesWhereUniqueInput, { nullable: false })
  @Type(() => User_UserRolesWhereUniqueInput)
  where!: User_UserRolesWhereUniqueInput;
}
