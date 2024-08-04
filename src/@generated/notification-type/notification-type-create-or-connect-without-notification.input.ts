import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationTypeWhereUniqueInput } from './notification-type-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationTypeCreateWithoutNotificationInput } from './notification-type-create-without-notification.input';

@InputType()
export class NotificationTypeCreateOrConnectWithoutNotificationInput {
  @Field(() => NotificationTypeWhereUniqueInput, { nullable: false })
  @Type(() => NotificationTypeWhereUniqueInput)
  where!: Prisma.AtLeast<NotificationTypeWhereUniqueInput, 'id'>;

  @Field(() => NotificationTypeCreateWithoutNotificationInput, {
    nullable: false,
  })
  @Type(() => NotificationTypeCreateWithoutNotificationInput)
  create!: NotificationTypeCreateWithoutNotificationInput;
}
