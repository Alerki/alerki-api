import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { GraphQLJSON } from 'graphql-type-json';
import { Directus_operationsCountAggregate } from './directus-operations-count-aggregate.output';
import { Directus_operationsAvgAggregate } from './directus-operations-avg-aggregate.output';
import { Directus_operationsSumAggregate } from './directus-operations-sum-aggregate.output';
import { Directus_operationsMinAggregate } from './directus-operations-min-aggregate.output';
import { Directus_operationsMaxAggregate } from './directus-operations-max-aggregate.output';

@ObjectType()
export class Directus_operationsGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: false })
  key!: string;

  @Field(() => String, { nullable: false })
  type!: string;

  @Field(() => Int, { nullable: false })
  position_x!: number;

  @Field(() => Int, { nullable: false })
  position_y!: number;

  @Field(() => GraphQLJSON, { nullable: true })
  options?: any;

  @Field(() => String, { nullable: true })
  resolve?: string;

  @Field(() => String, { nullable: true })
  reject?: string;

  @Field(() => String, { nullable: false })
  flow!: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => String, { nullable: true })
  user_created?: string;

  @Field(() => Directus_operationsCountAggregate, { nullable: true })
  _count?: Directus_operationsCountAggregate;

  @Field(() => Directus_operationsAvgAggregate, { nullable: true })
  _avg?: Directus_operationsAvgAggregate;

  @Field(() => Directus_operationsSumAggregate, { nullable: true })
  _sum?: Directus_operationsSumAggregate;

  @Field(() => Directus_operationsMinAggregate, { nullable: true })
  _min?: Directus_operationsMinAggregate;

  @Field(() => Directus_operationsMaxAggregate, { nullable: true })
  _max?: Directus_operationsMaxAggregate;
}
