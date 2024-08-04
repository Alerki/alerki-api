import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserRecipientOnNotificationWhereInput } from './user-recipient-on-notification-where.input';

@InputType()
export class UserRecipientOnNotificationListRelationFilter {
  @Field(() => UserRecipientOnNotificationWhereInput, { nullable: true })
  every?: UserRecipientOnNotificationWhereInput;

  @Field(() => UserRecipientOnNotificationWhereInput, { nullable: true })
  some?: UserRecipientOnNotificationWhereInput;

  @Field(() => UserRecipientOnNotificationWhereInput, { nullable: true })
  none?: UserRecipientOnNotificationWhereInput;
}
