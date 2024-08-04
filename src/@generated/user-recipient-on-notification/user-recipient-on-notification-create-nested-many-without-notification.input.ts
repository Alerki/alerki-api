import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecipientOnNotificationCreateWithoutNotificationInput } from './user-recipient-on-notification-create-without-notification.input';
import { Type } from 'class-transformer';
import { UserRecipientOnNotificationCreateOrConnectWithoutNotificationInput } from './user-recipient-on-notification-create-or-connect-without-notification.input';
import { UserRecipientOnNotificationCreateManyNotificationInputEnvelope } from './user-recipient-on-notification-create-many-notification-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserRecipientOnNotificationWhereUniqueInput } from './user-recipient-on-notification-where-unique.input';

@InputType()
export class UserRecipientOnNotificationCreateNestedManyWithoutNotificationInput {
  @Field(() => [UserRecipientOnNotificationCreateWithoutNotificationInput], {
    nullable: true,
  })
  @Type(() => UserRecipientOnNotificationCreateWithoutNotificationInput)
  create?: Array<UserRecipientOnNotificationCreateWithoutNotificationInput>;

  @Field(
    () => [UserRecipientOnNotificationCreateOrConnectWithoutNotificationInput],
    { nullable: true },
  )
  @Type(
    () => UserRecipientOnNotificationCreateOrConnectWithoutNotificationInput,
  )
  connectOrCreate?: Array<UserRecipientOnNotificationCreateOrConnectWithoutNotificationInput>;

  @Field(() => UserRecipientOnNotificationCreateManyNotificationInputEnvelope, {
    nullable: true,
  })
  @Type(() => UserRecipientOnNotificationCreateManyNotificationInputEnvelope)
  createMany?: UserRecipientOnNotificationCreateManyNotificationInputEnvelope;

  @Field(() => [UserRecipientOnNotificationWhereUniqueInput], {
    nullable: true,
  })
  @Type(() => UserRecipientOnNotificationWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserRecipientOnNotificationWhereUniqueInput, 'id'>
  >;
}
