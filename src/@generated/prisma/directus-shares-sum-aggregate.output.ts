import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_sharesSumAggregate {
  @Field(() => Int, { nullable: true })
  times_used?: number;

  @Field(() => Int, { nullable: true })
  max_uses?: number;
}
