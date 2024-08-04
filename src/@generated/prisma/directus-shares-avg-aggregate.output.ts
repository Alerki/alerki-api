import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Directus_sharesAvgAggregate {
  @Field(() => Float, { nullable: true })
  times_used?: number;

  @Field(() => Float, { nullable: true })
  max_uses?: number;
}
