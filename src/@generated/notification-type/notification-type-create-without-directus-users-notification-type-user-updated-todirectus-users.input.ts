import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { NotificationCreateNestedManyWithoutNotificationTypeInput } from '../notification/notification-create-nested-many-without-notification-type.input';
import { directus_usersCreateNestedOneWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput } from '../directus-users/directus-users-create-nested-one-without-notification-type-notification-type-user-created-todirectus-users.input';

@InputType()
export class NotificationTypeCreateWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput {
  @Field(() => String, { nullable: true })
  id?: string;

  @Field(() => Date, { nullable: true })
  date_created?: Date | string;

  @Field(() => Date, { nullable: true })
  date_updated?: Date | string;

  @Field(() => NotificationCreateNestedManyWithoutNotificationTypeInput, {
    nullable: true,
  })
  Notification?: NotificationCreateNestedManyWithoutNotificationTypeInput;

  @Field(
    () =>
      directus_usersCreateNestedOneWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput,
    { nullable: true },
  )
  directus_users_NotificationType_user_createdTodirectus_users?: directus_usersCreateNestedOneWithoutNotificationType_NotificationType_user_createdTodirectus_usersInput;
}
