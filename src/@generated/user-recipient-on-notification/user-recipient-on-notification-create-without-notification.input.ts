import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutUserRecipientOnNotificationInput } from '../user/user-create-nested-one-without-user-recipient-on-notification.input';

@InputType()
export class UserRecipientOnNotificationCreateWithoutNotificationInput {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => UserCreateNestedOneWithoutUserRecipientOnNotificationInput, {
    nullable: false,
  })
  User!: UserCreateNestedOneWithoutUserRecipientOnNotificationInput;
}
