import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { NotificationTypUncheckedUpdateInput } from './notification-typ-unchecked-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { NotificationTypWhereUniqueInput } from './notification-typ-where-unique.input';

@ArgsType()
export class UpdateOneNotificationTypArgs {
  @Field(() => NotificationTypUncheckedUpdateInput, { nullable: false })
  @Type(() => NotificationTypUncheckedUpdateInput)
  data!: NotificationTypUncheckedUpdateInput;

  @Field(() => NotificationTypWhereUniqueInput, { nullable: false })
  @Type(() => NotificationTypWhereUniqueInput)
  where!: Prisma.AtLeast<NotificationTypWhereUniqueInput, 'id'>;
}
