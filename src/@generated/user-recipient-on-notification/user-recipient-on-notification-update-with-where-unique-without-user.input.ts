import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserRecipientOnNotificationWhereUniqueInput } from './user-recipient-on-notification-where-unique.input';
import { Type } from 'class-transformer';
import { UserRecipientOnNotificationUpdateWithoutUserInput } from './user-recipient-on-notification-update-without-user.input';

@InputType()
export class UserRecipientOnNotificationUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => UserRecipientOnNotificationWhereUniqueInput, { nullable: false })
  @Type(() => UserRecipientOnNotificationWhereUniqueInput)
  where!: Prisma.AtLeast<UserRecipientOnNotificationWhereUniqueInput, 'id'>;

  @Field(() => UserRecipientOnNotificationUpdateWithoutUserInput, {
    nullable: false,
  })
  @Type(() => UserRecipientOnNotificationUpdateWithoutUserInput)
  data!: UserRecipientOnNotificationUpdateWithoutUserInput;
}
