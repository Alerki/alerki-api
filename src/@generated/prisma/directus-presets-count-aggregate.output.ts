import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_presetsCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  bookmark!: number;

  @Field(() => Int, { nullable: false })
  user!: number;

  @Field(() => Int, { nullable: false })
  role!: number;

  @Field(() => Int, { nullable: false })
  collection!: number;

  @Field(() => Int, { nullable: false })
  search!: number;

  @Field(() => Int, { nullable: false })
  layout!: number;

  @Field(() => Int, { nullable: false })
  layout_query!: number;

  @Field(() => Int, { nullable: false })
  layout_options!: number;

  @Field(() => Int, { nullable: false })
  refresh_interval!: number;

  @Field(() => Int, { nullable: false })
  filter!: number;

  @Field(() => Int, { nullable: false })
  icon!: number;

  @Field(() => Int, { nullable: false })
  color!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
