import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Directus_revisionsCountAggregate } from './directus-revisions-count-aggregate.output';
import { Directus_revisionsAvgAggregate } from './directus-revisions-avg-aggregate.output';
import { Directus_revisionsSumAggregate } from './directus-revisions-sum-aggregate.output';
import { Directus_revisionsMinAggregate } from './directus-revisions-min-aggregate.output';
import { Directus_revisionsMaxAggregate } from './directus-revisions-max-aggregate.output';

@ObjectType()
export class Directus_revisionsGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => Int, { nullable: false })
  activity!: number;

  @Field(() => String, { nullable: false })
  collection!: string;

  @Field(() => String, { nullable: false })
  item!: string;

  @Field(() => GraphQLJSON, { nullable: true })
  data?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  delta?: any;

  @Field(() => Int, { nullable: true })
  parent?: number;

  @Field(() => String, { nullable: true })
  version?: string;

  @Field(() => Directus_revisionsCountAggregate, { nullable: true })
  _count?: Directus_revisionsCountAggregate;

  @Field(() => Directus_revisionsAvgAggregate, { nullable: true })
  _avg?: Directus_revisionsAvgAggregate;

  @Field(() => Directus_revisionsSumAggregate, { nullable: true })
  _sum?: Directus_revisionsSumAggregate;

  @Field(() => Directus_revisionsMinAggregate, { nullable: true })
  _min?: Directus_revisionsMinAggregate;

  @Field(() => Directus_revisionsMaxAggregate, { nullable: true })
  _max?: Directus_revisionsMaxAggregate;
}
