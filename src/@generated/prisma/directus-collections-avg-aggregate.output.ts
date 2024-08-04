import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class Directus_collectionsAvgAggregate {
  @Field(() => Float, { nullable: true })
  sort?: number;
}
