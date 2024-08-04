import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationWhereInput } from './notification-where.input';

@InputType()
export class NotificationListRelationFilter {
  @Field(() => NotificationWhereInput, { nullable: true })
  every?: NotificationWhereInput;

  @Field(() => NotificationWhereInput, { nullable: true })
  some?: NotificationWhereInput;

  @Field(() => NotificationWhereInput, { nullable: true })
  none?: NotificationWhereInput;
}
