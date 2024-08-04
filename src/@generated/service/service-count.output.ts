import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class ServiceCount {
  @Field(() => Int, { nullable: false })
  Service_translations?: number;
}
