import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Directus_panelsCountAggregate } from './directus-panels-count-aggregate.output';
import { Directus_panelsAvgAggregate } from './directus-panels-avg-aggregate.output';
import { Directus_panelsSumAggregate } from './directus-panels-sum-aggregate.output';
import { Directus_panelsMinAggregate } from './directus-panels-min-aggregate.output';
import { Directus_panelsMaxAggregate } from './directus-panels-max-aggregate.output';

@ObjectType()
export class Directus_panelsGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  dashboard!: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  icon?: string;

  @Field(() => String, { nullable: true })
  color?: string;

  @Field(() => Boolean, { nullable: false })
  show_header!: boolean;

  @Field(() => String, { nullable: true })
  note?: string;

  @Field(() => String, { nullable: false })
  type!: string;

  @Field(() => Int, { nullable: false })
  position_x!: number;

  @Field(() => Int, { nullable: false })
  position_y!: number;

  @Field(() => Int, { nullable: false })
  width!: number;

  @Field(() => Int, { nullable: false })
  height!: number;

  @Field(() => GraphQLJSON, { nullable: true })
  options?: any;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => String, { nullable: true })
  user_created?: string;

  @Field(() => Directus_panelsCountAggregate, { nullable: true })
  _count?: Directus_panelsCountAggregate;

  @Field(() => Directus_panelsAvgAggregate, { nullable: true })
  _avg?: Directus_panelsAvgAggregate;

  @Field(() => Directus_panelsSumAggregate, { nullable: true })
  _sum?: Directus_panelsSumAggregate;

  @Field(() => Directus_panelsMinAggregate, { nullable: true })
  _min?: Directus_panelsMinAggregate;

  @Field(() => Directus_panelsMaxAggregate, { nullable: true })
  _max?: Directus_panelsMaxAggregate;
}
