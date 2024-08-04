import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { directus_usersUpdateOneWithoutNotificationType_NotificationType_user_createdTodirectus_usersNestedInput } from '../directus-users/directus-users-update-one-without-notification-type-notification-type-user-created-todirectus-users-nested.input';
import { directus_usersUpdateOneWithoutNotificationType_NotificationType_user_updatedTodirectus_usersNestedInput } from '../directus-users/directus-users-update-one-without-notification-type-notification-type-user-updated-todirectus-users-nested.input';

@InputType()
export class NotificationTypeUpdateWithoutNotificationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_created?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  date_updated?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(
    () =>
      directus_usersUpdateOneWithoutNotificationType_NotificationType_user_createdTodirectus_usersNestedInput,
    { nullable: true },
  )
  directus_users_NotificationType_user_createdTodirectus_users?: directus_usersUpdateOneWithoutNotificationType_NotificationType_user_createdTodirectus_usersNestedInput;

  @Field(
    () =>
      directus_usersUpdateOneWithoutNotificationType_NotificationType_user_updatedTodirectus_usersNestedInput,
    { nullable: true },
  )
  directus_users_NotificationType_user_updatedTodirectus_users?: directus_usersUpdateOneWithoutNotificationType_NotificationType_user_updatedTodirectus_usersNestedInput;
}
