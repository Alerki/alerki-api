import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserSenderOnNotificationWhereInput } from './user-sender-on-notification-where.input';

@InputType()
export class UserSenderOnNotificationListRelationFilter {
  @Field(() => UserSenderOnNotificationWhereInput, { nullable: true })
  every?: UserSenderOnNotificationWhereInput;

  @Field(() => UserSenderOnNotificationWhereInput, { nullable: true })
  some?: UserSenderOnNotificationWhereInput;

  @Field(() => UserSenderOnNotificationWhereInput, { nullable: true })
  none?: UserSenderOnNotificationWhereInput;
}
