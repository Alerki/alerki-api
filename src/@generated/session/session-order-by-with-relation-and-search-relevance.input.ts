import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { User_SessionOrderByRelationAggregateInput } from '../user-session/user-session-order-by-relation-aggregate.input';
import { SessionOrderByRelevanceInput } from './session-order-by-relevance.input';

@InputType()
export class SessionOrderByWithRelationAndSearchRelevanceInput {
  @Field(() => SortOrder, { nullable: true })
  id?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_created?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  date_updated?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  deviceName?: keyof typeof SortOrder;

  @Field(() => SortOrder, { nullable: true })
  refreshToken?: keyof typeof SortOrder;

  @Field(() => User_SessionOrderByRelationAggregateInput, { nullable: true })
  User_Session?: User_SessionOrderByRelationAggregateInput;

  @Field(() => SessionOrderByRelevanceInput, { nullable: true })
  _relevance?: SessionOrderByRelevanceInput;
}
