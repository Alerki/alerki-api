import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationTypeWhereInput } from './notification-type-where.input';

@InputType()
export class NotificationTypeRelationFilter {
  @Field(() => NotificationTypeWhereInput, { nullable: true })
  is?: NotificationTypeWhereInput;

  @Field(() => NotificationTypeWhereInput, { nullable: true })
  isNot?: NotificationTypeWhereInput;
}
