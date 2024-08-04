import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User_SessionCountAggregate } from './user-session-count-aggregate.output';
import { User_SessionAvgAggregate } from './user-session-avg-aggregate.output';
import { User_SessionSumAggregate } from './user-session-sum-aggregate.output';
import { User_SessionMinAggregate } from './user-session-min-aggregate.output';
import { User_SessionMaxAggregate } from './user-session-max-aggregate.output';

@ObjectType()
export class User_SessionGroupBy {
  @Field(() => Int, { nullable: false })
  id!: number;

  @Field(() => String, { nullable: false })
  User_id!: string;

  @Field(() => String, { nullable: false })
  Session_id!: string;

  @Field(() => User_SessionCountAggregate, { nullable: true })
  _count?: User_SessionCountAggregate;

  @Field(() => User_SessionAvgAggregate, { nullable: true })
  _avg?: User_SessionAvgAggregate;

  @Field(() => User_SessionSumAggregate, { nullable: true })
  _sum?: User_SessionSumAggregate;

  @Field(() => User_SessionMinAggregate, { nullable: true })
  _min?: User_SessionMinAggregate;

  @Field(() => User_SessionMaxAggregate, { nullable: true })
  _max?: User_SessionMaxAggregate;
}
