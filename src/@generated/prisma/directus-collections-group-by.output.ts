import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Int } from '@nestjs/graphql';
import { Directus_collectionsCountAggregate } from './directus-collections-count-aggregate.output';
import { Directus_collectionsAvgAggregate } from './directus-collections-avg-aggregate.output';
import { Directus_collectionsSumAggregate } from './directus-collections-sum-aggregate.output';
import { Directus_collectionsMinAggregate } from './directus-collections-min-aggregate.output';
import { Directus_collectionsMaxAggregate } from './directus-collections-max-aggregate.output';

@ObjectType()
export class Directus_collectionsGroupBy {
  @Field(() => String, { nullable: false })
  collection!: string;

  @Field(() => String, { nullable: true })
  icon?: string;

  @Field(() => String, { nullable: true })
  note?: string;

  @Field(() => String, { nullable: true })
  display_template?: string;

  @Field(() => Boolean, { nullable: false })
  hidden!: boolean;

  @Field(() => Boolean, { nullable: false })
  singleton!: boolean;

  @Field(() => GraphQLJSON, { nullable: true })
  translations?: any;

  @Field(() => String, { nullable: true })
  archive_field?: string;

  @Field(() => Boolean, { nullable: false })
  archive_app_filter!: boolean;

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
  group?: string;

  @Field(() => String, { nullable: false })
  collapse!: string;

  @Field(() => String, { nullable: true })
  preview_url?: string;

  @Field(() => Boolean, { nullable: false })
  versioning!: boolean;

  @Field(() => Directus_collectionsCountAggregate, { nullable: true })
  _count?: Directus_collectionsCountAggregate;

  @Field(() => Directus_collectionsAvgAggregate, { nullable: true })
  _avg?: Directus_collectionsAvgAggregate;

  @Field(() => Directus_collectionsSumAggregate, { nullable: true })
  _sum?: Directus_collectionsSumAggregate;

  @Field(() => Directus_collectionsMinAggregate, { nullable: true })
  _min?: Directus_collectionsMinAggregate;

  @Field(() => Directus_collectionsMaxAggregate, { nullable: true })
  _max?: Directus_collectionsMaxAggregate;
}
