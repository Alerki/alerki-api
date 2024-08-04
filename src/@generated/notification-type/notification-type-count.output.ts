import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class NotificationTypeCount {
  @Field(() => Int, { nullable: false })
  Notification?: number;
}
