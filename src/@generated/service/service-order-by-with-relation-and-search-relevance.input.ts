import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_usersOrderByWithRelationAndSearchRelevanceInput } from '../directus-users/directus-users-order-by-with-relation-and-search-relevance.input';
import { Service_translationsOrderByRelationAggregateInput } from '../service-translations/service-translations-order-by-relation-aggregate.input';
import { ServiceOrderByRelevanceInput } from './service-order-by-relevance.input';

@InputType()
export class ServiceOrderByWithRelationAndSearchRelevanceInput {
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

  @Field(() => directus_usersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  directus_users_Service_user_createdTodirectus_users?: directus_usersOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => directus_usersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  directus_users_Service_user_updatedTodirectus_users?: directus_usersOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => Service_translationsOrderByRelationAggregateInput, {
    nullable: true,
  })
  Service_translations?: Service_translationsOrderByRelationAggregateInput;

  @Field(() => ServiceOrderByRelevanceInput, { nullable: true })
  _relevance?: ServiceOrderByRelevanceInput;
}
