import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutUserRecipientOnNotificationInput } from './notification-create-without-user-recipient-on-notification.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutUserRecipientOnNotificationInput } from './notification-create-or-connect-without-user-recipient-on-notification.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';

@InputType()
export class NotificationCreateNestedOneWithoutUserRecipientOnNotificationInput {
  @Field(() => NotificationCreateWithoutUserRecipientOnNotificationInput, {
    nullable: true,
  })
  @Type(() => NotificationCreateWithoutUserRecipientOnNotificationInput)
  create?: NotificationCreateWithoutUserRecipientOnNotificationInput;

  @Field(
    () => NotificationCreateOrConnectWithoutUserRecipientOnNotificationInput,
    { nullable: true },
  )
  @Type(
    () => NotificationCreateOrConnectWithoutUserRecipientOnNotificationInput,
  )
  connectOrCreate?: NotificationCreateOrConnectWithoutUserRecipientOnNotificationInput;

  @Field(() => NotificationWhereUniqueInput, { nullable: true })
  @Type(() => NotificationWhereUniqueInput)
  connect?: Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>;
}
