import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutNotificationTypeInput } from './notification-create-without-notification-type.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutNotificationTypeInput } from './notification-create-or-connect-without-notification-type.input';
import { NotificationCreateManyNotificationTypeInputEnvelope } from './notification-create-many-notification-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';

@InputType()
export class NotificationUncheckedCreateNestedManyWithoutNotificationTypeInput {
  @Field(() => [NotificationCreateWithoutNotificationTypeInput], {
    nullable: true,
  })
  @Type(() => NotificationCreateWithoutNotificationTypeInput)
  create?: Array<NotificationCreateWithoutNotificationTypeInput>;

  @Field(() => [NotificationCreateOrConnectWithoutNotificationTypeInput], {
    nullable: true,
  })
  @Type(() => NotificationCreateOrConnectWithoutNotificationTypeInput)
  connectOrCreate?: Array<NotificationCreateOrConnectWithoutNotificationTypeInput>;

  @Field(() => NotificationCreateManyNotificationTypeInputEnvelope, {
    nullable: true,
  })
  @Type(() => NotificationCreateManyNotificationTypeInputEnvelope)
  createMany?: NotificationCreateManyNotificationTypeInputEnvelope;

  @Field(() => [NotificationWhereUniqueInput], { nullable: true })
  @Type(() => NotificationWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;
}
