import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationTypWhereInput } from './notification-typ-where.input';
import { Type } from 'class-transformer';
import { NotificationTypOrderByWithRelationAndSearchRelevanceInput } from './notification-typ-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { NotificationTypWhereUniqueInput } from './notification-typ-where-unique.input';
import { Int } from '@nestjs/graphql';
import { NotificationTypCountAggregateInput } from './notification-typ-count-aggregate.input';
import { NotificationTypAvgAggregateInput } from './notification-typ-avg-aggregate.input';
import { NotificationTypSumAggregateInput } from './notification-typ-sum-aggregate.input';
import { NotificationTypMinAggregateInput } from './notification-typ-min-aggregate.input';
import { NotificationTypMaxAggregateInput } from './notification-typ-max-aggregate.input';

@ArgsType()
export class NotificationTypAggregateArgs {
  @Field(() => NotificationTypWhereInput, { nullable: true })
  @Type(() => NotificationTypWhereInput)
  where?: NotificationTypWhereInput;

  @Field(() => [NotificationTypOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<NotificationTypOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => NotificationTypWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<NotificationTypWhereUniqueInput, 'id'>;

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
