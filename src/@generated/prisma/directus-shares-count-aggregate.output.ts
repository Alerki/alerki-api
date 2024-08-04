import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_sharesCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  name!: number;

  @Field(() => Int, { nullable: false })
  collection!: number;

  @Field(() => Int, { nullable: false })
  item!: number;

  @Field(() => Int, { nullable: false })
  role!: number;

  @Field(() => Int, { nullable: false })
  password!: number;

  @Field(() => Int, { nullable: false })
  user_created!: number;

  @Field(() => Int, { nullable: false })
  date_created!: number;

  @Field(() => Int, { nullable: false })
  date_start!: number;

  @Field(() => Int, { nullable: false })
  date_end!: number;

  @Field(() => Int, { nullable: false })
  times_used!: number;

  @Field(() => Int, { nullable: false })
  max_uses!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
