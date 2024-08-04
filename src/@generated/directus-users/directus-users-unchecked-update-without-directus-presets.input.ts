import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { GraphQLJSON } from 'graphql-type-json';
import { NullableDateTimeFieldUpdateOperationsInput } from '../prisma/nullable-date-time-field-update-operations.input';
import { NullableBoolFieldUpdateOperationsInput } from '../prisma/nullable-bool-field-update-operations.input';
import { CurrencyUncheckedUpdateManyWithoutDirectus_users_Currency_user_createdTodirectus_usersNestedInput } from '../currency/currency-unchecked-update-many-without-directus-users-currency-user-created-todirectus-users-nested.input';
import { CurrencyUncheckedUpdateManyWithoutDirectus_users_Currency_user_updatedTodirectus_usersNestedInput } from '../currency/currency-unchecked-update-many-without-directus-users-currency-user-updated-todirectus-users-nested.input';
import { NotificationTypeUncheckedUpdateManyWithoutDirectus_users_NotificationType_user_createdTodirectus_usersNestedInput } from '../notification-type/notification-type-unchecked-update-many-without-directus-users-notification-type-user-created-todirectus-users-nested.input';
import { NotificationTypeUncheckedUpdateManyWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersNestedInput } from '../notification-type/notification-type-unchecked-update-many-without-directus-users-notification-type-user-updated-todirectus-users-nested.input';
import { ServiceUncheckedUpdateManyWithoutDirectus_users_Service_user_createdTodirectus_usersNestedInput } from '../service/service-unchecked-update-many-without-directus-users-service-user-created-todirectus-users-nested.input';
import { ServiceUncheckedUpdateManyWithoutDirectus_users_Service_user_updatedTodirectus_usersNestedInput } from '../service/service-unchecked-update-many-without-directus-users-service-user-updated-todirectus-users-nested.input';
import { directus_dashboardsUncheckedUpdateManyWithoutDirectus_usersNestedInput } from '../directus-dashboards/directus-dashboards-unchecked-update-many-without-directus-users-nested.input';
import { directus_filesUncheckedUpdateManyWithoutDirectus_users_directus_files_modified_byTodirectus_usersNestedInput } from '../directus-files/directus-files-unchecked-update-many-without-directus-users-directus-files-modified-by-todirectus-users-nested.input';
import { directus_filesUncheckedUpdateManyWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersNestedInput } from '../directus-files/directus-files-unchecked-update-many-without-directus-users-directus-files-uploaded-by-todirectus-users-nested.input';
import { directus_flowsUncheckedUpdateManyWithoutDirectus_usersNestedInput } from '../directus-flows/directus-flows-unchecked-update-many-without-directus-users-nested.input';
import { directus_notificationsUncheckedUpdateManyWithoutDirectus_users_directus_notifications_recipientTodirectus_usersNestedInput } from '../directus-notifications/directus-notifications-unchecked-update-many-without-directus-users-directus-notifications-recipient-todirectus-users-nested.input';
import { directus_notificationsUncheckedUpdateManyWithoutDirectus_users_directus_notifications_senderTodirectus_usersNestedInput } from '../directus-notifications/directus-notifications-unchecked-update-many-without-directus-users-directus-notifications-sender-todirectus-users-nested.input';
import { directus_operationsUncheckedUpdateManyWithoutDirectus_usersNestedInput } from '../directus-operations/directus-operations-unchecked-update-many-without-directus-users-nested.input';
import { directus_panelsUncheckedUpdateManyWithoutDirectus_usersNestedInput } from '../directus-panels/directus-panels-unchecked-update-many-without-directus-users-nested.input';
import { directus_sessionsUncheckedUpdateManyWithoutDirectus_usersNestedInput } from '../directus-sessions/directus-sessions-unchecked-update-many-without-directus-users-nested.input';
import { directus_sharesUncheckedUpdateManyWithoutDirectus_usersNestedInput } from '../directus-shares/directus-shares-unchecked-update-many-without-directus-users-nested.input';
import { directus_versionsUncheckedUpdateManyWithoutDirectus_users_directus_versions_user_createdTodirectus_usersNestedInput } from '../directus-versions/directus-versions-unchecked-update-many-without-directus-users-directus-versions-user-created-todirectus-users-nested.input';
import { directus_versionsUncheckedUpdateManyWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersNestedInput } from '../directus-versions/directus-versions-unchecked-update-many-without-directus-users-directus-versions-user-updated-todirectus-users-nested.input';

@InputType()
export class directus_usersUncheckedUpdateWithoutDirectus_presetsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  id?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  first_name?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  last_name?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  email?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  password?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  location?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  title?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  description?: NullableStringFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  tags?: any;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  avatar?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  language?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  tfa_secret?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  status?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  role?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  token?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableDateTimeFieldUpdateOperationsInput, { nullable: true })
  last_access?: NullableDateTimeFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  last_page?: NullableStringFieldUpdateOperationsInput;

  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  provider?: StringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  external_identifier?: NullableStringFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  auth_data?: any;

  @Field(() => NullableBoolFieldUpdateOperationsInput, { nullable: true })
  email_notifications?: NullableBoolFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  appearance?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  theme_dark?: NullableStringFieldUpdateOperationsInput;

  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  theme_light?: NullableStringFieldUpdateOperationsInput;

  @Field(() => GraphQLJSON, { nullable: true })
  theme_light_overrides?: any;

  @Field(() => GraphQLJSON, { nullable: true })
  theme_dark_overrides?: any;

  @Field(
    () =>
      CurrencyUncheckedUpdateManyWithoutDirectus_users_Currency_user_createdTodirectus_usersNestedInput,
    { nullable: true },
  )
  Currency_Currency_user_createdTodirectus_users?: CurrencyUncheckedUpdateManyWithoutDirectus_users_Currency_user_createdTodirectus_usersNestedInput;

  @Field(
    () =>
      CurrencyUncheckedUpdateManyWithoutDirectus_users_Currency_user_updatedTodirectus_usersNestedInput,
    { nullable: true },
  )
  Currency_Currency_user_updatedTodirectus_users?: CurrencyUncheckedUpdateManyWithoutDirectus_users_Currency_user_updatedTodirectus_usersNestedInput;

  @Field(
    () =>
      NotificationTypeUncheckedUpdateManyWithoutDirectus_users_NotificationType_user_createdTodirectus_usersNestedInput,
    { nullable: true },
  )
  NotificationType_NotificationType_user_createdTodirectus_users?: NotificationTypeUncheckedUpdateManyWithoutDirectus_users_NotificationType_user_createdTodirectus_usersNestedInput;

  @Field(
    () =>
      NotificationTypeUncheckedUpdateManyWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersNestedInput,
    { nullable: true },
  )
  NotificationType_NotificationType_user_updatedTodirectus_users?: NotificationTypeUncheckedUpdateManyWithoutDirectus_users_NotificationType_user_updatedTodirectus_usersNestedInput;

  @Field(
    () =>
      ServiceUncheckedUpdateManyWithoutDirectus_users_Service_user_createdTodirectus_usersNestedInput,
    { nullable: true },
  )
  Service_Service_user_createdTodirectus_users?: ServiceUncheckedUpdateManyWithoutDirectus_users_Service_user_createdTodirectus_usersNestedInput;

  @Field(
    () =>
      ServiceUncheckedUpdateManyWithoutDirectus_users_Service_user_updatedTodirectus_usersNestedInput,
    { nullable: true },
  )
  Service_Service_user_updatedTodirectus_users?: ServiceUncheckedUpdateManyWithoutDirectus_users_Service_user_updatedTodirectus_usersNestedInput;

  @Field(
    () =>
      directus_dashboardsUncheckedUpdateManyWithoutDirectus_usersNestedInput,
    { nullable: true },
  )
  directus_dashboards?: directus_dashboardsUncheckedUpdateManyWithoutDirectus_usersNestedInput;

  @Field(
    () =>
      directus_filesUncheckedUpdateManyWithoutDirectus_users_directus_files_modified_byTodirectus_usersNestedInput,
    { nullable: true },
  )
  directus_files_directus_files_modified_byTodirectus_users?: directus_filesUncheckedUpdateManyWithoutDirectus_users_directus_files_modified_byTodirectus_usersNestedInput;

  @Field(
    () =>
      directus_filesUncheckedUpdateManyWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersNestedInput,
    { nullable: true },
  )
  directus_files_directus_files_uploaded_byTodirectus_users?: directus_filesUncheckedUpdateManyWithoutDirectus_users_directus_files_uploaded_byTodirectus_usersNestedInput;

  @Field(
    () => directus_flowsUncheckedUpdateManyWithoutDirectus_usersNestedInput,
    { nullable: true },
  )
  directus_flows?: directus_flowsUncheckedUpdateManyWithoutDirectus_usersNestedInput;

  @Field(
    () =>
      directus_notificationsUncheckedUpdateManyWithoutDirectus_users_directus_notifications_recipientTodirectus_usersNestedInput,
    { nullable: true },
  )
  directus_notifications_directus_notifications_recipientTodirectus_users?: directus_notificationsUncheckedUpdateManyWithoutDirectus_users_directus_notifications_recipientTodirectus_usersNestedInput;

  @Field(
    () =>
      directus_notificationsUncheckedUpdateManyWithoutDirectus_users_directus_notifications_senderTodirectus_usersNestedInput,
    { nullable: true },
  )
  directus_notifications_directus_notifications_senderTodirectus_users?: directus_notificationsUncheckedUpdateManyWithoutDirectus_users_directus_notifications_senderTodirectus_usersNestedInput;

  @Field(
    () =>
      directus_operationsUncheckedUpdateManyWithoutDirectus_usersNestedInput,
    { nullable: true },
  )
  directus_operations?: directus_operationsUncheckedUpdateManyWithoutDirectus_usersNestedInput;

  @Field(
    () => directus_panelsUncheckedUpdateManyWithoutDirectus_usersNestedInput,
    { nullable: true },
  )
  directus_panels?: directus_panelsUncheckedUpdateManyWithoutDirectus_usersNestedInput;

  @Field(
    () => directus_sessionsUncheckedUpdateManyWithoutDirectus_usersNestedInput,
    { nullable: true },
  )
  directus_sessions?: directus_sessionsUncheckedUpdateManyWithoutDirectus_usersNestedInput;

  @Field(
    () => directus_sharesUncheckedUpdateManyWithoutDirectus_usersNestedInput,
    { nullable: true },
  )
  directus_shares?: directus_sharesUncheckedUpdateManyWithoutDirectus_usersNestedInput;

  @Field(
    () =>
      directus_versionsUncheckedUpdateManyWithoutDirectus_users_directus_versions_user_createdTodirectus_usersNestedInput,
    { nullable: true },
  )
  directus_versions_directus_versions_user_createdTodirectus_users?: directus_versionsUncheckedUpdateManyWithoutDirectus_users_directus_versions_user_createdTodirectus_usersNestedInput;

  @Field(
    () =>
      directus_versionsUncheckedUpdateManyWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersNestedInput,
    { nullable: true },
  )
  directus_versions_directus_versions_user_updatedTodirectus_users?: directus_versionsUncheckedUpdateManyWithoutDirectus_users_directus_versions_user_updatedTodirectus_usersNestedInput;
}
