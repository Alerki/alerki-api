import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateWithoutNotificationTypeInput } from './notification-create-without-notification-type.input';
import { Type } from 'class-transformer';
import { NotificationCreateOrConnectWithoutNotificationTypeInput } from './notification-create-or-connect-without-notification-type.input';
import { NotificationUpsertWithWhereUniqueWithoutNotificationTypeInput } from './notification-upsert-with-where-unique-without-notification-type.input';
import { NotificationCreateManyNotificationTypeInputEnvelope } from './notification-create-many-notification-type-input-envelope.input';
import { Prisma } from '@prisma/client';
import { NotificationWhereUniqueInput } from './notification-where-unique.input';
import { NotificationUpdateWithWhereUniqueWithoutNotificationTypeInput } from './notification-update-with-where-unique-without-notification-type.input';
import { NotificationUpdateManyWithWhereWithoutNotificationTypeInput } from './notification-update-many-with-where-without-notification-type.input';
import { NotificationScalarWhereInput } from './notification-scalar-where.input';

@InputType()
export class NotificationUncheckedUpdateManyWithoutNotificationTypeNestedInput {
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

  @Field(
    () => [NotificationUpsertWithWhereUniqueWithoutNotificationTypeInput],
    { nullable: true },
  )
  @Type(() => NotificationUpsertWithWhereUniqueWithoutNotificationTypeInput)
  upsert?: Array<NotificationUpsertWithWhereUniqueWithoutNotificationTypeInput>;

  @Field(() => NotificationCreateManyNotificationTypeInputEnvelope, {
    nullable: true,
  })
  @Type(() => NotificationCreateManyNotificationTypeInputEnvelope)
  createMany?: NotificationCreateManyNotificationTypeInputEnvelope;

  @Field(() => [NotificationWhereUniqueInput], { nullable: true })
  @Type(() => NotificationWhereUniqueInput)
  set?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

  @Field(() => [NotificationWhereUniqueInput], { nullable: true })
  @Type(() => NotificationWhereUniqueInput)
  disconnect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

  @Field(() => [NotificationWhereUniqueInput], { nullable: true })
  @Type(() => NotificationWhereUniqueInput)
  delete?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

  @Field(() => [NotificationWhereUniqueInput], { nullable: true })
  @Type(() => NotificationWhereUniqueInput)
  connect?: Array<Prisma.AtLeast<NotificationWhereUniqueInput, 'id'>>;

  @Field(
    () => [NotificationUpdateWithWhereUniqueWithoutNotificationTypeInput],
    { nullable: true },
  )
  @Type(() => NotificationUpdateWithWhereUniqueWithoutNotificationTypeInput)
  update?: Array<NotificationUpdateWithWhereUniqueWithoutNotificationTypeInput>;

  @Field(() => [NotificationUpdateManyWithWhereWithoutNotificationTypeInput], {
    nullable: true,
  })
  @Type(() => NotificationUpdateManyWithWhereWithoutNotificationTypeInput)
  updateMany?: Array<NotificationUpdateManyWithWhereWithoutNotificationTypeInput>;

  @Field(() => [NotificationScalarWhereInput], { nullable: true })
  @Type(() => NotificationScalarWhereInput)
  deleteMany?: Array<NotificationScalarWhereInput>;
}
