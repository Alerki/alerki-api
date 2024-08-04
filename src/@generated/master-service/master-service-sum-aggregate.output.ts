import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class MasterServiceSumAggregate {
  @Field(() => Int, { nullable: true })
  price?: number;

  @Field(() => Int, { nullable: true })
  service?: number;
}
