import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_sharesWhereInput } from '../directus-shares/directus-shares-where.input';
import { Type } from 'class-transformer';
import { directus_sharesOrderByWithAggregationInput } from '../directus-shares/directus-shares-order-by-with-aggregation.input';
import { Directus_sharesScalarFieldEnum } from './directus-shares-scalar-field.enum';
import { directus_sharesScalarWhereWithAggregatesInput } from '../directus-shares/directus-shares-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusSharesArgs {
  @Field(() => directus_sharesWhereInput, { nullable: true })
  @Type(() => directus_sharesWhereInput)
  where?: directus_sharesWhereInput;

  @Field(() => [directus_sharesOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<directus_sharesOrderByWithAggregationInput>;

  @Field(() => [Directus_sharesScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof Directus_sharesScalarFieldEnum>;

  @Field(() => directus_sharesScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: directus_sharesScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
