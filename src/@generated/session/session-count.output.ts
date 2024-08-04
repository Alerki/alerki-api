import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class SessionCount {
  @Field(() => Int, { nullable: false })
  User_Session?: number;
}
