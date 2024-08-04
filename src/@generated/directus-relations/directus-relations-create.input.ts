import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class directus_relationsCreateInput {
  @Field(() => String, { nullable: false })
  many_collection!: string;

  @Field(() => String, { nullable: false })
  many_field!: string;

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
