import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_flowsCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  name!: number;

  @Field(() => Int, { nullable: false })
  icon!: number;

  @Field(() => Int, { nullable: false })
  color!: number;

  @Field(() => Int, { nullable: false })
  description!: number;

  @Field(() => Int, { nullable: false })
  status!: number;

  @Field(() => Int, { nullable: false })
  trigger!: number;

  @Field(() => Int, { nullable: false })
  accountability!: number;

  @Field(() => Int, { nullable: false })
  options!: number;

  @Field(() => Int, { nullable: false })
  operation!: number;

  @Field(() => Int, { nullable: false })
  date_created!: number;

  @Field(() => Int, { nullable: false })
  user_created!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
