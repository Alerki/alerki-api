import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_flowsWhereInput } from '../directus-flows/directus-flows-where.input';
import { Type } from 'class-transformer';
import { directus_flowsOrderByWithAggregationInput } from '../directus-flows/directus-flows-order-by-with-aggregation.input';
import { Directus_flowsScalarFieldEnum } from './directus-flows-scalar-field.enum';
import { directus_flowsScalarWhereWithAggregatesInput } from '../directus-flows/directus-flows-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusFlowsArgs {
  @Field(() => directus_flowsWhereInput, { nullable: true })
  @Type(() => directus_flowsWhereInput)
  where?: directus_flowsWhereInput;

  @Field(() => [directus_flowsOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<directus_flowsOrderByWithAggregationInput>;

  @Field(() => [Directus_flowsScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof Directus_flowsScalarFieldEnum>;

  @Field(() => directus_flowsScalarWhereWithAggregatesInput, { nullable: true })
  having?: directus_flowsScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
