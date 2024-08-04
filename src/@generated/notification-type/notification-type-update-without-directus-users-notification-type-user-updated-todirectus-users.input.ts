import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NotificationUpdateManyWithoutNotificationTypeNestedInput } from '../notification/notification-update-many-without-notification-type-nested.input';
import { directus_usersUpdateOneWithoutNotificationType_NotificationType_user_createdTodirectus_usersNestedInput } from '../directus-users/directus-users-update-one-without-notification-type-notification-type-user-created-todirectus-users-nested.input';

@InputType()
export class NotificationTypeUpdateWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_created?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_updated?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NotificationUpdateManyWithoutNotificationTypeNestedInput, {
    nullable: true,
  })
  Notification?: NotificationUpdateManyWithoutNotificationTypeNestedInput;

  @Field(
    () =>
      directus_usersUpdateOneWithoutNotificationType_NotificationType_user_createdTodirectus_usersNestedInput,
    { nullable: true },
  )
  directus_users_NotificationType_user_createdTodirectus_users?: directus_usersUpdateOneWithoutNotificationType_NotificationType_user_createdTodirectus_usersNestedInput;
}
