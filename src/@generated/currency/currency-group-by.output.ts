import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { CurrencyCountAggregate } from './currency-count-aggregate.output';
import { CurrencyAvgAggregate } from './currency-avg-aggregate.output';
import { CurrencySumAggregate } from './currency-sum-aggregate.output';
import { CurrencyMinAggregate } from './currency-min-aggregate.output';
import { CurrencyMaxAggregate } from './currency-max-aggregate.output';

@ObjectType()
export class CurrencyGroupBy {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  status!: string;

  @Field(() => Int, { nullable: true })
  sort?: number;

  @Field(() => String, { nullable: true })
  user_created?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => String, { nullable: true })
  user_updated?: string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => String, { nullable: false })
  code!: string;

  @Field(() => String, { nullable: false })
  character!: string;

  @Field(() => CurrencyCountAggregate, { nullable: true })
  _count?: CurrencyCountAggregate;

  @Field(() => CurrencyAvgAggregate, { nullable: true })
  _avg?: CurrencyAvgAggregate;

  @Field(() => CurrencySumAggregate, { nullable: true })
  _sum?: CurrencySumAggregate;

  @Field(() => CurrencyMinAggregate, { nullable: true })
  _min?: CurrencyMinAggregate;

  @Field(() => CurrencyMaxAggregate, { nullable: true })
  _max?: CurrencyMaxAggregate;
}
