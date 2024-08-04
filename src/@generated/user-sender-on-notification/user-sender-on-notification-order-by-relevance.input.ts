import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSenderOnNotificationOrderByRelevanceFieldEnum } from './user-sender-on-notification-order-by-relevance-field.enum';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserSenderOnNotificationOrderByRelevanceInput {
  @Field(() => [UserSenderOnNotificationOrderByRelevanceFieldEnum], {
    nullable: false,
  })
  fields!: Array<
    keyof typeof UserSenderOnNotificationOrderByRelevanceFieldEnum
  >;

  @Field(() => SortOrder, { nullable: false })
  sort!: keyof typeof SortOrder;

  @Field(() => String, { nullable: false })
  search!: string;
}
