import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';

@ObjectType()
export class NotificationTypeMaxAggregate {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => String, { nullable: true })
  user_created?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => String, { nullable: true })
  user_updated?: string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;
}
