import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationUpdateWithoutNotificationTypeInput } from './notification-update-without-notification-type.input';

@InputType()
export class NotificationUpdateWithWhereUniqueWithoutNotificationTypeInput {
  @Field(() => NotificationWhereUniqueInput, { nullable: false })
  @Type(() => NotificationWhereUniqueInput)
  where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

  @Field(() => NotificationUpdateWithoutNotificationTypeInput, {
    nullable: false,
  })
  @Type(() => NotificationUpdateWithoutNotificationTypeInput)
  data!: NotificationUpdateWithoutNotificationTypeInput;
}
