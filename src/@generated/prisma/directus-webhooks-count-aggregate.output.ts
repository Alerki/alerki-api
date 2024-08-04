import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_webhooksCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  name!: number;

  @Field(() => Int, { nullable: false })
  method!: number;

  @Field(() => Int, { nullable: false })
  url!: number;

  @Field(() => Int, { nullable: false })
  status!: number;

  @Field(() => Int, { nullable: false })
  data!: number;

  @Field(() => Int, { nullable: false })
  actions!: number;

  @Field(() => Int, { nullable: false })
  collections!: number;

  @Field(() => Int, { nullable: false })
  headers!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
