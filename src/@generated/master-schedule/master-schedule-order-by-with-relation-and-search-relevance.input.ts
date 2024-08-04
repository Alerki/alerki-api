import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { MasterProfileOrderByWithRelationAndSearchRelevanceInput } from '../master-profile/master-profile-order-by-with-relation-and-search-relevance.input';
import { MasterScheduleOrderByRelevanceInput } from './master-schedule-order-by-relevance.input';

@InputType()
export class MasterScheduleOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_updated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  startTime?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  endTime?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  dayOff?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  masterProfile?: keyof typeof SortOrder;

  @Field(() => MasterProfileOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  MasterProfile?: MasterProfileOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => MasterScheduleOrderByRelevanceInput, { nullable: true })
  _relevance?: MasterScheduleOrderByRelevanceInput;
}
