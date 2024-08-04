import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CurrencyWhereInput } from './currency-where.input';
import { Type } from 'class-transformer';
import { CurrencyOrderByWithAggregationInput } from './currency-order-by-with-aggregation.input';
import { CurrencyScalarFieldEnum } from './currency-scalar-field.enum';
import { CurrencyScalarWhereWithAggregatesInput } from './currency-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CurrencyCountAggregateInput } from './currency-count-aggregate.input';
import { CurrencyAvgAggregateInput } from './currency-avg-aggregate.input';
import { CurrencySumAggregateInput } from './currency-sum-aggregate.input';
import { CurrencyMinAggregateInput } from './currency-min-aggregate.input';
import { CurrencyMaxAggregateInput } from './currency-max-aggregate.input';

@ArgsType()
export class CurrencyGroupByArgs {
  @Field(() => CurrencyWhereInput, { nullable: true })
  @Type(() => CurrencyWhereInput)
  where?: CurrencyWhereInput;

  @Field(() => [CurrencyOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<CurrencyOrderByWithAggregationInput>;

  @Field(() => [CurrencyScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof CurrencyScalarFieldEnum>;

  @Field(() => CurrencyScalarWhereWithAggregatesInput, { nullable: true })
  having?: CurrencyScalarWhereWithAggregatesInput;

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
