import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AppointmentCountOrderByAggregateInput } from './appointment-count-order-by-aggregate.input';
import { AppointmentAvgOrderByAggregateInput } from './appointment-avg-order-by-aggregate.input';
import { AppointmentMaxOrderByAggregateInput } from './appointment-max-order-by-aggregate.input';
import { AppointmentMinOrderByAggregateInput } from './appointment-min-order-by-aggregate.input';
import { AppointmentSumOrderByAggregateInput } from './appointment-sum-order-by-aggregate.input';

@InputType()
export class AppointmentOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_updated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  masterService?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  clientProfile?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  masterProfile?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  duration?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  price?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  currency?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  startAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  endAt?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  confirmed?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  cancelled?: keyof typeof SortOrder;

  @Field(() => AppointmentCountOrderByAggregateInput, { nullable: true })
  _count?: AppointmentCountOrderByAggregateInput;

  @Field(() => AppointmentAvgOrderByAggregateInput, { nullable: true })
  _avg?: AppointmentAvgOrderByAggregateInput;

  @Field(() => AppointmentMaxOrderByAggregateInput, { nullable: true })
  _max?: AppointmentMaxOrderByAggregateInput;

  @Field(() => AppointmentMinOrderByAggregateInput, { nullable: true })
  _min?: AppointmentMinOrderByAggregateInput;

  @Field(() => AppointmentSumOrderByAggregateInput, { nullable: true })
  _sum?: AppointmentSumOrderByAggregateInput;
}
