import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserSenderOnNotificationWhereUniqueInput } from './user-sender-on-notification-where-unique.input';
import { Type } from 'class-transformer';
import { UserSenderOnNotificationCreateInput } from './user-sender-on-notification-create.input';
import { UserSenderOnNotificationUpdateInput } from './user-sender-on-notification-update.input';

@ArgsType()
export class UpsertOneUserSenderOnNotificationArgs {
  @Field(() => UserSenderOnNotificationWhereUniqueInput, { nullable: false })
  @Type(() => UserSenderOnNotificationWhereUniqueInput)
  where!: Prisma.AtLeast<UserSenderOnNotificationWhereUniqueInput, 'id'>;

  @Field(() => UserSenderOnNotificationCreateInput, { nullable: false })
  @Type(() => UserSenderOnNotificationCreateInput)
  create!: UserSenderOnNotificationCreateInput;

  @Field(() => UserSenderOnNotificationUpdateInput, { nullable: false })
  @Type(() => UserSenderOnNotificationUpdateInput)
  update!: UserSenderOnNotificationUpdateInput;
}
