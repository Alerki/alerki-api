import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { User_UserRolesWhereInput } from './user-user-roles-where.input';

@InputType()
export class User_UserRolesListRelationFilter {
  @Field(() => User_UserRolesWhereInput, { nullable: true })
  every?: User_UserRolesWhereInput;

  @Field(() => User_UserRolesWhereInput, { nullable: true })
  some?: User_UserRolesWhereInput;

  @Field(() => User_UserRolesWhereInput, { nullable: true })
  none?: User_UserRolesWhereInput;
}
