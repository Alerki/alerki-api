import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_operationsWhereInput } from '../directus-operations/directus-operations-where.input';
import { Type } from 'class-transformer';
import { directus_operationsOrderByWithAggregationInput } from '../directus-operations/directus-operations-order-by-with-aggregation.input';
import { Directus_operationsScalarFieldEnum } from './directus-operations-scalar-field.enum';
import { directus_operationsScalarWhereWithAggregatesInput } from '../directus-operations/directus-operations-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusOperationsArgs {
  @Field(() => directus_operationsWhereInput, { nullable: true })
  @Type(() => directus_operationsWhereInput)
  where?: directus_operationsWhereInput;

  @Field(() => [directus_operationsOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<directus_operationsOrderByWithAggregationInput>;

  @Field(() => [Directus_operationsScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof Directus_operationsScalarFieldEnum>;

  @Field(() => directus_operationsScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: directus_operationsScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
