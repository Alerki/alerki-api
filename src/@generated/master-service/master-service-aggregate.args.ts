import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterServiceWhereInput } from './master-service-where.input';
import { Type } from 'class-transformer';
import { MasterServiceOrderByWithRelationAndSearchRelevanceInput } from './master-service-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { MasterServiceWhereUniqueInput } from './master-service-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MasterServiceCountAggregateInput } from './master-service-count-aggregate.input';
import { MasterServiceAvgAggregateInput } from './master-service-avg-aggregate.input';
import { MasterServiceSumAggregateInput } from './master-service-sum-aggregate.input';
import { MasterServiceMinAggregateInput } from './master-service-min-aggregate.input';
import { MasterServiceMaxAggregateInput } from './master-service-max-aggregate.input';

@ArgsType()
export class MasterServiceAggregateArgs {
  @Field(() => MasterServiceWhereInput, { nullable: true })
  @Type(() => MasterServiceWhereInput)
  where?: MasterServiceWhereInput;

  @Field(() => [MasterServiceOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<MasterServiceOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => MasterServiceWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<MasterServiceWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => MasterServiceCountAggregateInput, { nullable: true })
  _count?: MasterServiceCountAggregateInput;

  @Field(() => MasterServiceAvgAggregateInput, { nullable: true })
  _avg?: MasterServiceAvgAggregateInput;

  @Field(() => MasterServiceSumAggregateInput, { nullable: true })
  _sum?: MasterServiceSumAggregateInput;

  @Field(() => MasterServiceMinAggregateInput, { nullable: true })
  _min?: MasterServiceMinAggregateInput;

  @Field(() => MasterServiceMaxAggregateInput, { nullable: true })
  _max?: MasterServiceMaxAggregateInput;
}
