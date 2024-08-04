import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AppointmentOrderByRelationAggregateInput } from '../appointment/appointment-order-by-relation-aggregate.input';
import { MasterWeeklyScheduleOrderByWithRelationAndSearchRelevanceInput } from '../master-weekly-schedule/master-weekly-schedule-order-by-with-relation-and-search-relevance.input';
import { MasterScheduleOrderByRelationAggregateInput } from '../master-schedule/master-schedule-order-by-relation-aggregate.input';
import { MasterServiceOrderByRelationAggregateInput } from '../master-service/master-service-order-by-relation-aggregate.input';
import { UserOrderByRelationAggregateInput } from '../user/user-order-by-relation-aggregate.input';
import { MasterProfileOrderByRelevanceInput } from './master-profile-order-by-relevance.input';

@InputType()
export class MasterProfileOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_updated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  masterWeeklySchedule?: keyof typeof SortOrder;

  @Field(() => AppointmentOrderByRelationAggregateInput, { nullable: true })
  Appointment_Appointment_masterProfileToMasterProfile?: AppointmentOrderByRelationAggregateInput;

  @Field(() => AppointmentOrderByRelationAggregateInput, { nullable: true })
  Appointment_Appointment_masterServiceToMasterProfile?: AppointmentOrderByRelationAggregateInput;

  @Field(() => MasterWeeklyScheduleOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  MasterWeeklySchedule?: MasterWeeklyScheduleOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => MasterScheduleOrderByRelationAggregateInput, { nullable: true })
  MasterSchedule?: MasterScheduleOrderByRelationAggregateInput;

  @Field(() => MasterServiceOrderByRelationAggregateInput, { nullable: true })
  MasterService?: MasterServiceOrderByRelationAggregateInput;

  @Field(() => UserOrderByRelationAggregateInput, { nullable: true })
  User?: UserOrderByRelationAggregateInput;

  @Field(() => MasterProfileOrderByRelevanceInput, { nullable: true })
  _relevance?: MasterProfileOrderByRelevanceInput;
}
