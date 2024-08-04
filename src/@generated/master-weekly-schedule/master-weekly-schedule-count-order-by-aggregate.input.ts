import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MasterWeeklyScheduleCountOrderByAggregateInput {
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
}
