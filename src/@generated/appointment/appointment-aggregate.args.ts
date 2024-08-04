import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppointmentWhereInput } from './appointment-where.input';
import { Type } from 'class-transformer';
import { AppointmentOrderByWithRelationAndSearchRelevanceInput } from './appointment-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { AppointmentWhereUniqueInput } from './appointment-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AppointmentCountAggregateInput } from './appointment-count-aggregate.input';
import { AppointmentAvgAggregateInput } from './appointment-avg-aggregate.input';
import { AppointmentSumAggregateInput } from './appointment-sum-aggregate.input';
import { AppointmentMinAggregateInput } from './appointment-min-aggregate.input';
import { AppointmentMaxAggregateInput } from './appointment-max-aggregate.input';

@ArgsType()
export class AppointmentAggregateArgs {
  @Field(() => AppointmentWhereInput, { nullable: true })
  @Type(() => AppointmentWhereInput)
  where?: AppointmentWhereInput;

  @Field(() => [AppointmentOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true,
  })
  orderBy?: Array<AppointmentOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => AppointmentWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<AppointmentWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => AppointmentCountAggregateInput, { nullable: true })
  _count?: AppointmentCountAggregateInput;

  @Field(() => AppointmentAvgAggregateInput, { nullable: true })
  _avg?: AppointmentAvgAggregateInput;

  @Field(() => AppointmentSumAggregateInput, { nullable: true })
  _sum?: AppointmentSumAggregateInput;

  @Field(() => AppointmentMinAggregateInput, { nullable: true })
  _min?: AppointmentMinAggregateInput;

  @Field(() => AppointmentMaxAggregateInput, { nullable: true })
  _max?: AppointmentMaxAggregateInput;
}
