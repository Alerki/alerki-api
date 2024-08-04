import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationUpdateInput } from './notification-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';

@ArgsType()
export class UpdateOneNotificationArgs {
  @Field(() => NotificationUpdateInput, { nullable: false })
  @Type(() => NotificationUpdateInput)
  data!: NotificationUpdateInput;

  @Field(() => NotificationWhereUniqueInput, { nullable: false })
  @Type(() => NotificationWhereUniqueInput)
  where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;
}
