import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_revisionsWhereInput } from '../directus-revisions/directus-revisions-where.input';
import { Type } from 'class-transformer';
import { directus_revisionsOrderByWithAggregationInput } from '../directus-revisions/directus-revisions-order-by-with-aggregation.input';
import { Directus_revisionsScalarFieldEnum } from './directus-revisions-scalar-field.enum';
import { directus_revisionsScalarWhereWithAggregatesInput } from '../directus-revisions/directus-revisions-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusRevisionsArgs {
  @Field(() => directus_revisionsWhereInput, { nullable: true })
  @Type(() => directus_revisionsWhereInput)
  where?: directus_revisionsWhereInput;

  @Field(() => [directus_revisionsOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<directus_revisionsOrderByWithAggregationInput>;

  @Field(() => [Directus_revisionsScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof Directus_revisionsScalarFieldEnum>;

  @Field(() => directus_revisionsScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: directus_revisionsScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
