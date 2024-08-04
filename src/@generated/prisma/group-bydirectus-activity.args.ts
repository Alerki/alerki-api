import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { directus_activityWhereInput } from '../directus-activity/directus-activity-where.input';
import { Type } from 'class-transformer';
import { directus_activityOrderByWithAggregationInput } from '../directus-activity/directus-activity-order-by-with-aggregation.input';
import { Directus_activityScalarFieldEnum } from './directus-activity-scalar-field.enum';
import { directus_activityScalarWhereWithAggregatesInput } from '../directus-activity/directus-activity-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class GroupBydirectusActivityArgs {
  @Field(() => directus_activityWhereInput, { nullable: true })
  @Type(() => directus_activityWhereInput)
  where?: directus_activityWhereInput;

  @Field(() => [directus_activityOrderByWithAggregationInput], {
    nullable: true,
  })
  orderBy?: Array<directus_activityOrderByWithAggregationInput>;

  @Field(() => [Directus_activityScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof Directus_activityScalarFieldEnum>;

  @Field(() => directus_activityScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: directus_activityScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;
}
