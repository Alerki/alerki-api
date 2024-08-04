import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { MasterScheduleOrderByRelevanceFieldEnum } from './master-schedule-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class MasterScheduleOrderByRelevanceInput {
  @Field(() => [MasterScheduleOrderByRelevanceFieldEnum], { nullable: false })
  fields!: Array<keyof typeof MasterScheduleOrderByRelevanceFieldEnum>;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
