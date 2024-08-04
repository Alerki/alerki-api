import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationCreateWithoutNotificationTypeInput } from './notification-create-without-notification-type.input';

@InputType()
export class NotificationCreateOrConnectWithoutNotificationTypeInput {
  @Field(() => NotificationWhereUniqueInput, { nullable: false })
  @Type(() => NotificationWhereUniqueInput)
  where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

  @Field(() => NotificationCreateWithoutNotificationTypeInput, {
    nullable: false,
  })
  @Type(() => NotificationCreateWithoutNotificationTypeInput)
  create!: NotificationCreateWithoutNotificationTypeInput;
}
