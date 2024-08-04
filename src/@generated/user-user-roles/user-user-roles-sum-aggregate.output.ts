import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class User_UserRolesSumAggregate {
  @Field(() => Int, { nullable: true })
  id?: number;
}
