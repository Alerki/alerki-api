import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationTypeCreateWithoutNotificationInput } from './notification-type-create-without-notification.input';
import { Type } from 'class-transformer';
import { NotificationTypeCreateOrConnectWithoutNotificationInput } from './notification-type-create-or-connect-without-notification.input';
import { Prisma } from '@prisma/client';
import { NotificationTypeWhereUniqueInput } from './notification-type-where-unique.input';

@InputType()
export class NotificationTypeCreateNestedOneWithoutNotificationInput {
  @Field(() => NotificationTypeCreateWithoutNotificationInput, {
    nullable: true,
  })
  @Type(() => NotificationTypeCreateWithoutNotificationInput)
  create?: NotificationTypeCreateWithoutNotificationInput;

  @Field(() => NotificationTypeCreateOrConnectWithoutNotificationInput, {
    nullable: true,
  })
  @Type(() => NotificationTypeCreateOrConnectWithoutNotificationInput)
  connectOrCreate?: NotificationTypeCreateOrConnectWithoutNotificationInput;

  @Field(() => NotificationTypeWhereUniqueInput, { nullable: true })
  @Type(() => NotificationTypeWhereUniqueInput)
  connect?: Prisma.AtLeast<NotificationTypeWhereUniqueInput, 'id'>;
}
