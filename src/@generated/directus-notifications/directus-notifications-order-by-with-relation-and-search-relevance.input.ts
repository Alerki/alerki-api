import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_usersOrderByWithRelationAndSearchRelevanceInput } from '../directus-users/directus-users-order-by-with-relation-and-search-relevance.input';
import { directus_notificationsOrderByRelevanceInput } from './directus-notifications-order-by-relevance.input';

@InputType()
export class directus_notificationsOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  timestamp?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  status?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  recipient?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  sender?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  subject?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  message?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  collection?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  item?: keyof typeof SortOrder;

  @Field(() => directus_usersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  directus_users_directus_notifications_recipientTodirectus_users?: directus_usersOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => directus_usersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  directus_users_directus_notifications_senderTodirectus_users?: directus_usersOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => directus_notificationsOrderByRelevanceInput, { nullable: true })
  _relevance?: directus_notificationsOrderByRelevanceInput;
}
