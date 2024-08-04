import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationWhereInput } from './notification-where.input';

@InputType()
export class NotificationRelationFilter {
  @Field(() => NotificationWhereInput, { nullable: true })
  is?: NotificationWhereInput;

  @Field(() => NotificationWhereInput, { nullable: true })
  isNot?: NotificationWhereInput;
}
