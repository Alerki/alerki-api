import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_panelsWhereInput } from '../directus-panels/directus-panels-where.input';
import { Type } from 'class-transformer';
import { directus_panelsOrderByWithAggregationInput } from '../directus-panels/directus-panels-order-by-with-aggregation.input';
import { Directus_panelsScalarFieldEnum } from './directus-panels-scalar-field.enum';
import { directus_panelsScalarWhereWithAggregatesInput } from '../directus-panels/directus-panels-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusPanelsArgs {
  @Field(() => directus_panelsWhereInput, { nullable: true })
  @Type(() => directus_panelsWhereInput)
  where?: directus_panelsWhereInput;

  @Field(() => [directus_panelsOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<directus_panelsOrderByWithAggregationInput>;

  @Field(() => [Directus_panelsScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof Directus_panelsScalarFieldEnum>;

  @Field(() => directus_panelsScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: directus_panelsScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
