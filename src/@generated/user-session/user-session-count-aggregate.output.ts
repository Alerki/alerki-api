import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class User_SessionCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  User_id!: number;

  @Field(() => Int, { nullable: false })
  Session_id!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
