import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationTypWhereUniqueInput } from './notification-typ-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationTypUncheckedCreateInput } from './notification-typ-unchecked-create.input';
import { NotificationTypUncheckedUpdateInput } from './notification-typ-unchecked-update.input';

@ArgsType()
export class UpsertOneNotificationTypArgs {
  @Field(() => NotificationTypWhereUniqueInput, { nullable: false })
  @Type(() => NotificationTypWhereUniqueInput)
  where!: Prisma.AtLeast<NotificationTypWhereUniqueInput, 'id'>;

  @Field(() => NotificationTypUncheckedCreateInput, { nullable: false })
  @Type(() => NotificationTypUncheckedCreateInput)
  create!: NotificationTypUncheckedCreateInput;

  @Field(() => NotificationTypUncheckedUpdateInput, { nullable: false })
  @Type(() => NotificationTypUncheckedUpdateInput)
  update!: NotificationTypUncheckedUpdateInput;
}
