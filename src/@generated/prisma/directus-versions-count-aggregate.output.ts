import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_versionsCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  key!: number;

  @Field(() => Int, { nullable: false })
  name!: number;

  @Field(() => Int, { nullable: false })
  collection!: number;

  @Field(() => Int, { nullable: false })
  item!: number;

  @Field(() => Int, { nullable: false })
  hash!: number;

  @Field(() => Int, { nullable: false })
  date_created!: number;

  @Field(() => Int, { nullable: false })
  date_updated!: number;

  @Field(() => Int, { nullable: false })
  user_created!: number;

  @Field(() => Int, { nullable: false })
  user_updated!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
