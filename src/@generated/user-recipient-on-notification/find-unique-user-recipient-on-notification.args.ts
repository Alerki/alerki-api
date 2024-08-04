import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRecipientOnNotificationWhereUniqueInput } from './user-recipient-on-notification-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueUserRecipientOnNotificationArgs {
  @Field(() => UserRecipientOnNotificationWhereUniqueInput, { nullable: false })
  @Type(() => UserRecipientOnNotificationWhereUniqueInput)
  where!: Prisma.AtLeast<UserRecipientOnNotificationWhereUniqueInput, 'id'>;
}
