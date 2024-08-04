import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { directus_sharesOrderByWithRelationAndSearchRelevanceInput } from '../directus-shares/directus-shares-order-by-with-relation-and-search-relevance.input';
import { directus_usersOrderByWithRelationAndSearchRelevanceInput } from '../directus-users/directus-users-order-by-with-relation-and-search-relevance.input';
import { directus_sessionsOrderByRelevanceInput } from './directus-sessions-order-by-relevance.input';

@InputType()
export class directus_sessionsOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  token?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  expires?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  ip?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  user_agent?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  share?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  origin?: keyof typeof SortOrder;

  @Field(() => directus_sharesOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  directus_shares?: directus_sharesOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => directus_usersOrderByWithRelationAndSearchRelevanceInput, {
    nullable: true,
  })
  directus_users?: directus_usersOrderByWithRelationAndSearchRelevanceInput;

  @Field(() => directus_sessionsOrderByRelevanceInput, { nullable: true })
  _relevance?: directus_sessionsOrderByRelevanceInput;
}
