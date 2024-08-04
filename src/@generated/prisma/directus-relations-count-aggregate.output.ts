import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_relationsCountAggregate {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  many_collection!: number;

  @Field(() => Int, { nullable: false })
  many_field!: number;

  @Field(() => Int, { nullable: false })
  one_collection!: number;

  @Field(() => Int, { nullable: false })
  one_field!: number;

  @Field(() => Int, { nullable: false })
  one_collection_field!: number;

  @Field(() => Int, { nullable: false })
  one_allowed_collections!: number;

  @Field(() => Int, { nullable: false })
  junction_field!: number;

  @Field(() => Int, { nullable: false })
  sort_field!: number;

  @Field(() => Int, { nullable: false })
  one_deselect_action!: number;

  @Field(() => Int, { nullable: false })
  _all!: number;
}
