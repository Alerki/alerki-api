import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';

@ObjectType()
export class directus_relations {
  @Field(() => ID, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  many_collection!: string;

  @Field(() => String, { nullable: false })
  many_field!: string;

  @Field(() => String, { nullable: true })
  one_collection!: string | null;

  @Field(() => String, { nullable: true })
  one_field!: string | null;

  @Field(() => String, { nullable: true })
  one_collection_field!: string | null;

  @Field(() => String, { nullable: true })
  one_allowed_collections!: string | null;

  @Field(() => String, { nullable: true })
  junction_field!: string | null;

  @Field(() => String, { nullable: true })
  sort_field!: string | null;

  @Field(() => String, { nullable: false, defaultValue: 'nullify' })
  one_deselect_action!: string;
}
