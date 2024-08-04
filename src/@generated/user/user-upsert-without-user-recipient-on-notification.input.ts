import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutUserRecipientOnNotificationInput } from './user-update-without-user-recipient-on-notification.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutUserRecipientOnNotificationInput } from './user-create-without-user-recipient-on-notification.input';

@InputType()
export class UserUpsertWithoutUserRecipientOnNotificationInput {
  @Field(() => UserUpdateWithoutUserRecipientOnNotificationInput, {
    nullable: false,
  })
  @Type(() => UserUpdateWithoutUserRecipientOnNotificationInput)
  update!: UserUpdateWithoutUserRecipientOnNotificationInput;

  @Field(() => UserCreateWithoutUserRecipientOnNotificationInput, {
    nullable: false,
  })
  @Type(() => UserCreateWithoutUserRecipientOnNotificationInput)
  create!: UserCreateWithoutUserRecipientOnNotificationInput;
}
