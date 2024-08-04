import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { directus_collectionsCreateNestedManyWithoutDirectus_collectionsInput } from './directus-collections-create-nested-many-without-directus-collections.input';
import { directus_sharesCreateNestedManyWithoutDirectus_collectionsInput } from '../directus-shares/directus-shares-create-nested-many-without-directus-collections.input';
import { directus_versionsCreateNestedManyWithoutDirectus_collectionsInput } from '../directus-versions/directus-versions-create-nested-many-without-directus-collections.input';

@InputType()
export class directus_collectionsCreateWithoutDirectus_collectionsInput {
  @Field(() => String, { nullable: false })
  collection!: string;

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

  @Field(() => GraphQLJSON, { nullable: true })
  translations?: any;

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

  @Field(() => GraphQLJSON, { nullable: true })
  item_duplication_fields?: any;

  @Field(() => Int, { nullable: true })
  sort?: number;

  @Field(() => String, { nullable: true })
  collapse?: string;

  @Field(() => String, { nullable: true })
  preview_url?: string;

  @Field(() => Boolean, { nullable: true })
  versioning?: boolean;

  @Field(
    () => directus_collectionsCreateNestedManyWithoutDirectus_collectionsInput,
    { nullable: true },
  )
  other_directus_collections?: directus_collectionsCreateNestedManyWithoutDirectus_collectionsInput;

  @Field(
    () => directus_sharesCreateNestedManyWithoutDirectus_collectionsInput,
    { nullable: true },
  )
  directus_shares?: directus_sharesCreateNestedManyWithoutDirectus_collectionsInput;

  @Field(
    () => directus_versionsCreateNestedManyWithoutDirectus_collectionsInput,
    { nullable: true },
  )
  directus_versions?: directus_versionsCreateNestedManyWithoutDirectus_collectionsInput;
}
