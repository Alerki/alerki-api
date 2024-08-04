import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { UserRecipientOnNotificationWhereInput } from './user-recipient-on-notification-where.input';
import { Type } from 'class-transformer';
import { UserRecipientOnNotificationOrderByWithRelationAndSearchRelevanceInput } from './user-recipient-on-notification-order-by-with-relation-and-search-relevance.input';
import { Prisma } from '@prisma/client';
import { UserRecipientOnNotificationWhereUniqueInput } from './user-recipient-on-notification-where-unique.input';
import { Int } from '@nestjs/graphql';
import { UserRecipientOnNotificationScalarFieldEnum } from './user-recipient-on-notification-scalar-field.enum';

@ArgsType()
export class FindFirstUserRecipientOnNotificationOrThrowArgs {
  @Field(() => UserRecipientOnNotificationWhereInput, { nullable: true })
  @Type(() => UserRecipientOnNotificationWhereInput)
  where?: UserRecipientOnNotificationWhereInput;

  @Field(
    () => [
      UserRecipientOnNotificationOrderByWithRelationAndSearchRelevanceInput,
    ],
    { nullable: true },
  )
  orderBy?: Array<UserRecipientOnNotificationOrderByWithRelationAndSearchRelevanceInput>;

  @Field(() => UserRecipientOnNotificationWhereUniqueInput, { nullable: true })
  cursor?: Prisma.AtLeast<UserRecipientOnNotificationWhereUniqueInput, 'id'>;

  @Field(() => Int, { nullable: true })
  take?: number;

  @Field(() => Int, { nullable: true })
  skip?: number;

  @Field(() => [UserRecipientOnNotificationScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UserRecipientOnNotificationScalarFieldEnum>;
}
