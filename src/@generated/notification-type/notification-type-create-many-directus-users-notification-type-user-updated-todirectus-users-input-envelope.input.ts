import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationTypeCreateManyDirectus_users_NotificationType_user_updatedTodirectus_usersInput } from './notification-type-create-many-directus-users-notification-type-user-updated-todirectus-users.input';
import { Type } from 'class-transformer';

@InputType()
export class NotificationTypeCreateManyDirectus_users_NotificationType_user_updatedTodirectus_usersInputEnvelope {
  @Field(
    () => [
      NotificationTypeCreateManyDirectus_users_NotificationType_user_updatedTodirectus_usersInput,
    ],
    { nullable: false },
  )
  @Type(
    () =>
      NotificationTypeCreateManyDirectus_users_NotificationType_user_updatedTodirectus_usersInput,
  )
  data!: Array<NotificationTypeCreateManyDirectus_users_NotificationType_user_updatedTodirectus_usersInput>;

  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}
