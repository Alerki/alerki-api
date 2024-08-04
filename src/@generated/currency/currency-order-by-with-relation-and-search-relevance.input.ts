import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { AppointmentOrderByRelationAggregateInput } from '../appointment/appointment-order-by-relation-aggregate.input';
import { directus_usersOrderByWithRelationAndSearchRelevanceInput } from '../directus-users/directus-users-order-by-with-relation-and-search-relevance.input';
import { MasterServiceOrderByRelationAggregateInput } from '../master-service/master-service-order-by-relation-aggregate.input';
import { CurrencyOrderByRelevanceInput } from './currency-order-by-relevance.input';

@InputType()
export class CurrencyOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  sort?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user_updated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_updated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  code?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  character?: keyof typeof SortOrder;

  @Field(() => AppointmentOrderByRelationAggregateInput, { nullable: true })
  Appointment?: AppointmentOrderByRelationAggregateInput;

  @Field(() => directus_usersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  directus_users_Currency_user_createdTodirectus_users?: directus_usersOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => directus_usersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  directus_users_Currency_user_updatedTodirectus_users?: directus_usersOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => MasterServiceOrderByRelationAggregateInput, { nullable: true })
  MasterService?: MasterServiceOrderByRelationAggregateInput;

  @Field(() => CurrencyOrderByRelevanceInput, { nullable: true })
  _relevance?: CurrencyOrderByRelevanceInput;
}
