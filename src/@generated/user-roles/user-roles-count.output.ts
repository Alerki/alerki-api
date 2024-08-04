import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserRolesCount {
  @Field(() => Int, { nullable: false })
  User_UserRoles?: number;
}
