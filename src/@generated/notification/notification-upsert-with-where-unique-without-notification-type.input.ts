import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationUpdateWithoutNotificationTypeInput } from './notification-update-without-notification-type.input';
import { NotificationCreateWithoutNotificationTypeInput } from './notification-create-without-notification-type.input';

@InputType()
export class NotificationUpsertWithWhereUniqueWithoutNotificationTypeInput {
  @Field(() => NotificationWhereUniqueInput, { nullable: false })
  @Type(() => NotificationWhereUniqueInput)
  where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

  @Field(() => NotificationUpdateWithoutNotificationTypeInput, {
    nullable: false,
  })
  @Type(() => NotificationUpdateWithoutNotificationTypeInput)
  update!: NotificationUpdateWithoutNotificationTypeInput;

  @Field(() => NotificationCreateWithoutNotificationTypeInput, {
    nullable: false,
  })
  @Type(() => NotificationCreateWithoutNotificationTypeInput)
  create!: NotificationCreateWithoutNotificationTypeInput;
}
