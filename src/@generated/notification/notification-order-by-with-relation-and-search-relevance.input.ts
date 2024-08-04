import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { NotificationTypeOrderByWithRelationAndSearchRelevanceInput } from '../notification-type/notification-type-order-by-with-relation-and-search-relevance.input';
import { NotificationOrderByRelevanceInput } from './notification-order-by-relevance.input';

@InputType()
export class NotificationOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_updated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  type?: keyof typeof SortOrder;

  @Field(() => NotificationTypeOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  NotificationType?: NotificationTypeOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => NotificationOrderByRelevanceInput, { nullable: true })
  _relevance?: NotificationOrderByRelevanceInput;
}
