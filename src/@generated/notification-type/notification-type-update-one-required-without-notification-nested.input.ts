import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationTypeCreateWithoutNotificationInput } from './notification-type-create-without-notification.input';
import { Type } from 'class-transformer';
import { NotificationTypeCreateOrConnectWithoutNotificationInput } from './notification-type-create-or-connect-without-notification.input';
import { NotificationTypeUpsertWithoutNotificationInput } from './notification-type-upsert-without-notification.input';
import { Prisma } from '@prisma/client';
import { NotificationTypeWhereUniqueInput } from './notification-type-where-unique.input';
import { NotificationTypeUpdateWithoutNotificationInput } from './notification-type-update-without-notification.input';

@InputType()
export class NotificationTypeUpdateOneRequiredWithoutNotificationNestedInput {
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

  @Field(() => NotificationTypeUpsertWithoutNotificationInput, {
    nullable: true,
  })
  @Type(() => NotificationTypeUpsertWithoutNotificationInput)
  upsert?: NotificationTypeUpsertWithoutNotificationInput;

  @Field(() => NotificationTypeWhereUniqueInput, { nullable: true })
  @Type(() => NotificationTypeWhereUniqueInput)
  connect?: Prisma.AtLeast<NotificationTypeWhereUniqueInput, 'id'>;

  @Field(() => NotificationTypeUpdateWithoutNotificationInput, {
    nullable: true,
  })
  @Type(() => NotificationTypeUpdateWithoutNotificationInput)
  update?: NotificationTypeUpdateWithoutNotificationInput;
}
