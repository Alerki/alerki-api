import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserSenderOnNotificationWhereUniqueInput } from './user-sender-on-notification-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class FindUniqueUserSenderOnNotificationOrThrowArgs {
  @Field(() => UserSenderOnNotificationWhereUniqueInput, { nullable: false })
  @Type(() => UserSenderOnNotificationWhereUniqueInput)
  where!: Prisma.AtLeast<UserSenderOnNotificationWhereUniqueInput, 'id'>;
}
