import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { Type } from 'class-transformer';
import { NotificationCreateWithoutUserRecipientOnNotificationInput } from './notification-create-without-user-recipient-on-notification.input';

@InputType()
export class NotificationCreateOrConnectWithoutUserRecipientOnNotificationInput {
  @Field(() => NotificationWhereUniqueInput, { nullable: false })
  @Type(() => NotificationWhereUniqueInput)
  where!: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;

  @Field(() => NotificationCreateWithoutUserRecipientOnNotificationInput, {
    nullable: false,
  })
  @Type(() => NotificationCreateWithoutUserRecipientOnNotificationInput)
  create!: NotificationCreateWithoutUserRecipientOnNotificationInput;
}
