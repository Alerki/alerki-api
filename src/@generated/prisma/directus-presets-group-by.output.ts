import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Directus_presetsCountAggregate } from './directus-presets-count-aggregate.output';
import { Directus_presetsAvgAggregate } from './directus-presets-avg-aggregate.output';
import { Directus_presetsSumAggregate } from './directus-presets-sum-aggregate.output';
import { Directus_presetsMinAggregate } from './directus-presets-min-aggregate.output';
import { Directus_presetsMaxAggregate } from './directus-presets-max-aggregate.output';

@ObjectType()
export class Directus_presetsGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: true })
  bookmark?: string;

  @Field(() => String, { nullable: true })
  user?: string;

  @Field(() => String, { nullable: true })
  role?: string;

  @Field(() => String, { nullable: true })
  collection?: string;

  @Field(() => String, { nullable: true })
  search?: string;

  @Field(() => String, { nullable: true })
  layout?: string;

  @Field(() => GraphQLJSON, { nullable: true })
  layout_query?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  layout_options?: any;

  @Field(() => Int, { nullable: true })
  refresh_interval?: number;

  @Field(() => GraphQLJSON, { nullable: true })
  filter?: any;

  @Field(() => String, { nullable: true })
  icon?: string;

  @Field(() => String, { nullable: true })
  color?: string;

  @Field(() => Directus_presetsCountAggregate, { nullable: true })
  _count?: Directus_presetsCountAggregate;

  @Field(() => Directus_presetsAvgAggregate, { nullable: true })
  _avg?: Directus_presetsAvgAggregate;

  @Field(() => Directus_presetsSumAggregate, { nullable: true })
  _sum?: Directus_presetsSumAggregate;

  @Field(() => Directus_presetsMinAggregate, { nullable: true })
  _min?: Directus_presetsMinAggregate;

  @Field(() => Directus_presetsMaxAggregate, { nullable: true })
  _max?: Directus_presetsMaxAggregate;
}
