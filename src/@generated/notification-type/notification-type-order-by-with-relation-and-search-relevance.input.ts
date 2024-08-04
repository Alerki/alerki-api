import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NotificationOrderByRelationAggregateInput } from '../notification/notification-order-by-relation-aggregate.input';
import { directus_usersOrderByWithRelationAndSearchRelevanceInput } from '../directus-users/directus-users-order-by-with-relation-and-search-relevance.input';
import { NotificationTypeOrderByRelevanceInput } from './notification-type-order-by-relevance.input';

@InputType()
export class NotificationTypeOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user_updated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_updated?: keyof typeof SortOrder;

  @Field(() => NotificationOrderByRelationAggregateInput, { nullable: true })
  Notification?: NotificationOrderByRelationAggregateInput;

  @Field(() => directus_usersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  directus_users_NotificationType_user_createdTodirectus_users?: directus_usersOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => directus_usersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  directus_users_NotificationType_user_updatedTodirectus_users?: directus_usersOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => NotificationTypeOrderByRelevanceInput, { nullable: true })
  _relevance?: NotificationTypeOrderByRelevanceInput;
}
