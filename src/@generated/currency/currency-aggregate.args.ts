import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrencyWhereInput } from './currency-where.input';
import { Type } from 'class-transformer';
import { CurrencyOrderByWithRelationAndSearchRelevanceInput } from './currency-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { CurrencyWhereUniqueInput } from './currency-where-unique.input';
import { Int } from '@nestjs/graphql';
import { CurrencyCountAggregateInput } from './currency-count-aggregate.input';
import { CurrencyAvgAggregateInput } from './currency-avg-aggregate.input';
import { CurrencySumAggregateInput } from './currency-sum-aggregate.input';
import { CurrencyMinAggregateInput } from './currency-min-aggregate.input';
import { CurrencyMaxAggregateInput } from './currency-max-aggregate.input';

@ArgsType()
export class CurrencyAggregateArgs {
  @Field(() => CurrencyWhereInput, { nullable: true })
  @Type(() => CurrencyWhereInput)
  where?: CurrencyWhereInput;

  @Field(() => [CurrencyOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<CurrencyOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => CurrencyWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<CurrencyWhereUniqueInput, 'id' | 'code'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => CurrencyCountAggregateInput, { nullable: true })
  _count?: CurrencyCountAggregateInput;

  @Field(() => CurrencyAvgAggregateInput, { nullable: true })
  _avg?: CurrencyAvgAggregateInput;

  @Field(() => CurrencySumAggregateInput, { nullable: true })
  _sum?: CurrencySumAggregateInput;

  @Field(() => CurrencyMinAggregateInput, { nullable: true })
  _min?: CurrencyMinAggregateInput;

  @Field(() => CurrencyMaxAggregateInput, { nullable: true })
  _max?: CurrencyMaxAggregateInput;
}
