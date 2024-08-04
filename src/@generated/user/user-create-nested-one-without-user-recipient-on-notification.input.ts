import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutUserRecipientOnNotificationInput } from './user-create-without-user-recipient-on-notification.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutUserRecipientOnNotificationInput } from './user-create-or-connect-without-user-recipient-on-notification.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutUserRecipientOnNotificationInput {
  @Field(() => UserCreateWithoutUserRecipientOnNotificationInput, {
    nullable: true,
  })
  @Type(() => UserCreateWithoutUserRecipientOnNotificationInput)
  create?: UserCreateWithoutUserRecipientOnNotificationInput;

  @Field(() => UserCreateOrConnectWithoutUserRecipientOnNotificationInput, {
    nullable: true,
  })
  @Type(() => UserCreateOrConnectWithoutUserRecipientOnNotificationInput)
  connectOrCreate?: UserCreateOrConnectWithoutUserRecipientOnNotificationInput;

  @Field(() => UserWhereUniqueInput, { nullable: true })
  @Type(() => UserWhereUniqueInput)
  connect?: Prisma.AtLeast<
    UserWhereUniqueInput,
    'id' | 'email' | 'phoneNumber' | 'username'
  >;
}
