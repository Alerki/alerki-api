import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecipientOnNotificationCreateWithoutUserInput } from './user-recipient-on-notification-create-without-user.input';
import { Type } from 'class-transformer';
import { UserRecipientOnNotificationCreateOrConnectWithoutUserInput } from './user-recipient-on-notification-create-or-connect-without-user.input';
import { UserRecipientOnNotificationCreateManyUserInputEnvelope } from './user-recipient-on-notification-create-many-user-input-envelope.input';
import { Prisma } from '@prisma/client';
import { UserRecipientOnNotificationWhereUniqueInput } from './user-recipient-on-notification-where-unique.input';

@InputType()
export class UserRecipientOnNotificationCreateNestedManyWithoutUserInput {
  @Field(() => [UserRecipientOnNotificationCreateWithoutUserInput], {
    nullable: true,
  })
  @Type(() => UserRecipientOnNotificationCreateWithoutUserInput)
  create?: Array<UserRecipientOnNotificationCreateWithoutUserInput>;

  @Field(() => [UserRecipientOnNotificationCreateOrConnectWithoutUserInput], {
    nullable: true,
  })
  @Type(() => UserRecipientOnNotificationCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<UserRecipientOnNotificationCreateOrConnectWithoutUserInput>;

  @Field(() => UserRecipientOnNotificationCreateManyUserInputEnvelope, {
    nullable: true,
  })
  @Type(() => UserRecipientOnNotificationCreateManyUserInputEnvelope)
  createMany?: UserRecipientOnNotificationCreateManyUserInputEnvelope;

  @Field(() => [UserRecipientOnNotificationWhereUniqueInput], {
    nullable: true,
  })
  @Type(() => UserRecipientOnNotificationWhereUniqueInput)
  connect?: Array<
    Prisma.AtLeast<UserRecipientOnNotificationWhereUniqueInput, 'id'>
  >;
}
