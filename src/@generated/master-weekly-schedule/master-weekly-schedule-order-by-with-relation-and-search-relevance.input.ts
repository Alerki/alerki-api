import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MasterProfileOrderByRelationAggregateInput } from '../master-profile/master-profile-order-by-relation-aggregate.input';
import { MasterWeeklyScheduleOrderByRelevanceInput } from './master-weekly-schedule-order-by-relevance.input';

@InputType()
export class MasterWeeklyScheduleOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  sort?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_updated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  monday?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  tuesday?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  wednesday?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  thursday?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  friday?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  saturday?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  sunday?: keyof typeof SortOrder;

  @Field(() => MasterProfileOrderByRelationAggregateInput, { nullable: true })
  MasterProfile?: MasterProfileOrderByRelationAggregateInput;

  @Field(() => MasterWeeklyScheduleOrderByRelevanceInput, { nullable: true })
  _relevance?: MasterWeeklyScheduleOrderByRelevanceInput;
}
