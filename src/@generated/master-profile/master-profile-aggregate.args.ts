import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { MasterProfileWhereInput } from './master-profile-where.input';
import { Type } from 'class-transformer';
import { MasterProfileOrderByWithRelationAndSearchRelevanceInput } from './master-profile-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { MasterProfileWhereUniqueInput } from './master-profile-where-unique.input';
import { Int } from '@nestjs/graphql';
import { MasterProfileCountAggregateInput } from './master-profile-count-aggregate.input';
import { MasterProfileMinAggregateInput } from './master-profile-min-aggregate.input';
import { MasterProfileMaxAggregateInput } from './master-profile-max-aggregate.input';

@ArgsType()
export class MasterProfileAggregateArgs {
  @Field(() => MasterProfileWhereInput, { nullable: true })
  @Type(() => MasterProfileWhereInput)
  where?: MasterProfileWhereInput;

  @Field(() => [MasterProfileOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<MasterProfileOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => MasterProfileWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<MasterProfileWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => MasterProfileCountAggregateInput, { nullable: true })
  _count?: MasterProfileCountAggregateInput;

  @Field(() => MasterProfileMinAggregateInput, { nullable: true })
  _min?: MasterProfileMinAggregateInput;

  @Field(() => MasterProfileMaxAggregateInput, { nullable: true })
  _max?: MasterProfileMaxAggregateInput;
}
