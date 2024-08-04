import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_relationsMaxAggregate {
  @Field(() => Int, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  many_collection?: string;

  @Field(() => String, { nullable: true })
  many_field?: string;

  @Field(() => String, { nullable: true })
  one_collection?: string;

  @Field(() => String, { nullable: true })
  one_field?: string;

  @Field(() => String, { nullable: true })
  one_collection_field?: string;

  @Field(() => String, { nullable: true })
  one_allowed_collections?: string;

  @Field(() => String, { nullable: true })
  junction_field?: string;

  @Field(() => String, { nullable: true })
  sort_field?: string;

  @Field(() => String, { nullable: true })
  one_deselect_action?: string;
}
