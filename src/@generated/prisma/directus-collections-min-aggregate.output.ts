import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class Directus_collectionsMinAggregate {
  @Field(() => String, { nullable: true })
  collection?: string;

  @Field(() => String, { nullable: true })
  icon?: string;

  @Field(() => String, { nullable: true })
  note?: string;

  @Field(() => String, { nullable: true })
  display_template?: string;

  @Field(() => Boolean, { nullable: true })
  hidden?: boolean;

  @Field(() => Boolean, { nullable: true })
  singleton?: boolean;

  @Field(() => String, { nullable: true })
  archive_field?: string;

  @Field(() => Boolean, { nullable: true })
  archive_app_filter?: boolean;

  @Field(() => String, { nullable: true })
  archive_value?: string;

  @Field(() => String, { nullable: true })
  unarchive_value?: string;

  @Field(() => String, { nullable: true })
  sort_field?: string;

  @Field(() => String, { nullable: true })
  accountability?: string;

  @Field(() => String, { nullable: true })
  color?: string;

  @Field(() => Int, { nullable: true })
  sort?: number;

  @Field(() => String, { nullable: true })
  group?: string;

  @Field(() => String, { nullable: true })
  collapse?: string;

  @Field(() => String, { nullable: true })
  preview_url?: string;

  @Field(() => Boolean, { nullable: true })
  versioning?: boolean;
}
