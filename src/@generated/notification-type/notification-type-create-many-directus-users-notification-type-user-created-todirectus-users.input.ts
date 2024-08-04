import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class NotificationTypeCreateManyDirectus_users_NotificationType_user_createdTodirectus_usersInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => String, { nullable: true })
  user_updated?: string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;
}
