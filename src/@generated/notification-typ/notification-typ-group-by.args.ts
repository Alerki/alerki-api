import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationTypWhereInput } from './notification-typ-where.input';
import { Type } from 'class-transformer';
import { NotificationTypOrderByWithAggregationInput } from './notification-typ-order-by-with-aggregation.input';
import { NotificationTypScalarFieldEnum } from './notification-typ-scalar-field.enum';
import { NotificationTypScalarWhereWithAggregatesInput } from './notification-typ-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { NotificationTypCountAggregateInput } from './notification-typ-count-aggregate.input';
import { NotificationTypAvgAggregateInput } from './notification-typ-avg-aggregate.input';
import { NotificationTypSumAggregateInput } from './notification-typ-sum-aggregate.input';
import { NotificationTypMinAggregateInput } from './notification-typ-min-aggregate.input';
import { NotificationTypMaxAggregateInput } from './notification-typ-max-aggregate.input';

@ArgsType()
export class NotificationTypGroupByArgs {
  @Field(() => NotificationTypWhereInput, { nullable: true })
  @Type(() => NotificationTypWhereInput)
  where?: NotificationTypWhereInput;

  @Field(() => [NotificationTypOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<NotificationTypOrderByWithAggregationInput>;

  @Field(() => [NotificationTypScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof NotificationTypScalarFieldEnum>;

  @Field(() => NotificationTypScalarWhereWithAggregatesInput, {
    nullable: true,
  })
  having?: NotificationTypScalarWhereWithAggregatesInput;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => NotificationTypCountAggregateInput, { nullable: true })
  _count?: NotificationTypCountAggregateInput;

  @Field(() => NotificationTypAvgAggregateInput, { nullable: true })
  _avg?: NotificationTypAvgAggregateInput;

  @Field(() => NotificationTypSumAggregateInput, { nullable: true })
  _sum?: NotificationTypSumAggregateInput;

  @Field(() => NotificationTypMinAggregateInput, { nullable: true })
  _min?: NotificationTypMinAggregateInput;

  @Field(() => NotificationTypMaxAggregateInput, { nullable: true })
  _max?: NotificationTypMaxAggregateInput;
}
