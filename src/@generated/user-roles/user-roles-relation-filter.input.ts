import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRolesWhereInput } from './user-roles-where.input';

@InputType()
export class UserRolesRelationFilter {
  @Field(() => UserRolesWhereInput, { nullable: true })
  is?: UserRolesWhereInput;

  @Field(() => UserRolesWhereInput, { nullable: true })
  isNot?: UserRolesWhereInput;
}
